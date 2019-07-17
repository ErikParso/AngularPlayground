import { Injectable } from '@angular/core';
import { Student } from '../Models/student';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class StudentsService {

  studentsUrl = 'http://localhost:5000/api/students';

  constructor(private http: HttpClient) { }

  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }

  public postStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, student);
  }

  public putStudent(student: Student): Observable<Student> {
    return this.http.put(this.studentsUrl, student).pipe(
      map(() => student)
    );
  }
}
