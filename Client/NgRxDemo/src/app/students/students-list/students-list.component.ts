import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Models/student';
import { StudentsService } from '../Services/students.service';
import { Store, select } from '@ngrx/store';
import { setCurrentStudent } from '../students.actions';
import { currentStudentSelector } from '../students.reducer';
import { State } from 'src/app/app.reducer';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students$: Observable<Student>;
  currentStudent: Observable<Student>;

  constructor(
    private studentsService: StudentsService,
    private store: Store<State>) { }

  ngOnInit() {
    this.students$ = this.studentsService.GetStudents();
    this.currentStudent = this.store.pipe(select(currentStudentSelector));
  }

  setCurrentStudent(student: Student) {
    this.store.dispatch(setCurrentStudent(student));
  }
}
