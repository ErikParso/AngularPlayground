import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/app.reducer';
import { Observable } from 'rxjs';
import { Student } from '../Models/student';
import { currentStudentSelector } from '../students.reducer';
import { MatDialog } from '@angular/material/dialog';
import { StudentEditComponent } from '../student-edit/student-edit.component';
import { AddStudentAction, EditStudentAction } from '../students.actions';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  currentStudent$: Observable<Student>;

  constructor(
    private store: Store<State>,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.currentStudent$ = this.store.pipe(select(currentStudentSelector));
  }

  addStudent() {
    const dialogRef = this.dialog.open<StudentEditComponent, Student, Student>(
      StudentEditComponent, { width: '300px', data: { id: 0, name: '', birthDay: null, notes: [] } });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.id === 0) {
          this.store.dispatch(new AddStudentAction(result));
        }
      }
    });
  }

  editStudent(student: Student) {
    const dialogRef = this.dialog.open<StudentEditComponent, Student, Student>(
      StudentEditComponent, { width: '300px', data: JSON.parse(JSON.stringify(student)) });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(new EditStudentAction(result));
      }
    });
  }

}
