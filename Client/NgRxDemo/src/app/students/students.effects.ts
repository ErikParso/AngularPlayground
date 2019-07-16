import { Injectable } from '@angular/core';
import { StudentsService } from './Services/students.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadStudents, loadStudentsSuccess, loadStudentsError } from './students.actions';
import { of } from 'rxjs';

@Injectable()
export class StudentsEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(loadStudents().type),
    mergeMap(() => this.studentsService.getStudents()
      .pipe(
        map(students => loadStudentsSuccess({value: students})),
        catchError(() => of (loadStudentsError()))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private studentsService: StudentsService
  ) {}
}
