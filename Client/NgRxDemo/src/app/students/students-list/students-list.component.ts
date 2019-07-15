import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Models/student';
import { StudentsService } from '../Services/students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  private students$: Observable<Student>;

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.students$ = this.studentsService.GetStudents();
  }
}
