import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsListComponent } from './students-list/students-list.component';
import {HttpClientModule} from '@angular/common/http';
import { StudentsService } from './Services/students.service';

@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule,
    HttpClientModule
  ],
  declarations: [
    StudentsComponent,
    StudentsListComponent
  ],
  providers: [
    StudentsService
  ]
})
export class StudentsModule { }
