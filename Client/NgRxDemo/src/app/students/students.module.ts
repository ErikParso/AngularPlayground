import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsListComponent } from './students-list/students-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsService } from './Services/students.service';
import { StoreModule } from '@ngrx/store';
import { reducer } from './students.reducer';
import { StudentsEffects } from './students.effects';
import { EffectsModule } from '@ngrx/effects';

import {MatTableModule} from '@angular/material/table';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('students', reducer),
    EffectsModule.forFeature([StudentsEffects]),
    MatTableModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    StudentsComponent,
    StudentsListComponent,
    StudentDetailComponent
  ],
  providers: [
    StudentsService
  ]
})
export class StudentsModule { }
