import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Models/student';
import { Store, select } from '@ngrx/store';
import { setCurrentStudent, loadStudents } from '../students.actions';
import { currentStudentSelector, allStudentsSelector, errorMessageSelector } from '../students.reducer';
import { State } from 'src/app/app.reducer';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students$: Observable<Student[]>;
  currentStudent$: Observable<Student>;
  errorMessage$: Observable<string>;
  displayedColumns: string[] = ['name', 'birthDay'];

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.students$ = this.store.pipe(select(allStudentsSelector));
    this.currentStudent$ = this.store.pipe(select(currentStudentSelector));
    this.errorMessage$ = this.store.pipe(select(errorMessageSelector));
    this.store.dispatch(loadStudents());
  }

  setCurrentStudent(student: Student) {
    this.store.dispatch(setCurrentStudent({payload: student}));
  }
}
