import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../Models/student';

@Component({
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {

  constructor(
    public dialogRef: MatDialogRef<StudentEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student) {}

    onNoClick(): void {
      this.dialogRef.close();
    }
}
