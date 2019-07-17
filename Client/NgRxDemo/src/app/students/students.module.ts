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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatNativeDateModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule
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
