import { Injectable } from '@angular/core';
import { Student } from '../Models/student';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StudentsService {

  getStudentsUrl = 'http://localhost:5000/api/students';

  constructor(private http: HttpClient) { }

  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.getStudentsUrl);
  }
}
