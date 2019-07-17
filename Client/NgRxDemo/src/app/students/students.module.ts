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

import { MatTableModule } from '@angular/material/table';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StudentsRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('students', reducer),
    EffectsModule.forFeature([StudentsEffects]),
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    StudentsComponent,
    StudentsListComponent,
    StudentDetailComponent,
    StudentEditComponent
  ],
  providers: [
    StudentsService
  ],
  entryComponents: [
    StudentEditComponent
  ]
})
export class StudentsModule { }
