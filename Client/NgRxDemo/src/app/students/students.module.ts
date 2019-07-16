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

@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('students', reducer),
    EffectsModule.forFeature([StudentsEffects])
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
