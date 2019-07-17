import { Injectable } from '@angular/core';
import { StudentsService } from './Services/students.service';
import { map, mergeMap, catchError, tap, concatMap, takeWhile } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as StudentActions from './students.actions';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';
import { State } from '../app.reducer';

@Injectable()
export class StudentsEffects {

  loadStudents$ = createEffect(() => this.actions$.pipe(
    ofType(StudentActions.StudentActions.loadStudents),
    mergeMap(() => this.studentsService.getStudents()
      .pipe(
        map(students => StudentActions.loadStudentsSuccess({ payload: students })),
        catchError(() => of(StudentActions.loadStudentsError()))
      ))
  ));

  addStudent$ = createEffect(() => this.actions$.pipe(
    ofType<StudentActions.AddStudentAction>(StudentActions.StudentActions.addStudent),
    mergeMap(action => this.studentsService.postStudent(action.payload)
      .pipe(
        map(student => StudentActions.addStudentSuccess({ payload: student })),
        tap(student => this.snackBar.open('New student', 'open')
          .onAction().subscribe(() => this.store.dispatch(StudentActions.setCurrentStudent(student)))),
        catchError(() => of(StudentActions.addStudentError()))
      ))
  ));

  editStudent$ = createEffect(() => this.actions$.pipe(
    ofType<StudentActions.EditStudentAction>(StudentActions.StudentActions.editStudent),
    mergeMap(action => this.studentsService.putStudent(action.payload)
      .pipe(
        map(student => new StudentActions.EditStudentSuccessAction(student)),
        catchError(() => of(StudentActions.addStudentError()))
      ))
  ));

  constructor(
    private actions$: Actions,
    private studentsService: StudentsService,
    private snackBar: MatSnackBar,
    private store: Store<State>
  ) { }
}
