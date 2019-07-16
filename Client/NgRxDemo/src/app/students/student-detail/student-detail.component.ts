import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/app.reducer';
import { Observable } from 'rxjs';
import { Student } from '../Models/student';
import { currentStudentSelector } from '../students.reducer';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  currentStudent$: Observable<Student>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.currentStudent$ = this.store.pipe(select(currentStudentSelector));
  }
}
