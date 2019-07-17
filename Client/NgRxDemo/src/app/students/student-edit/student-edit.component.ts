import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../Models/student';
import { MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  isEdit: boolean;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  skillCtrl = new FormControl();
  filteredSkills: Observable<string[]>;
  allSkills: string[] = ['Angular', '.NET', 'ASP.NET', 'ASP.NET core', 'SQL'];

  @ViewChild('skillInput', { static: false }) skillInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  constructor(
    public dialogRef: MatDialogRef<StudentEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student) {
    this.filteredSkills = this.skillCtrl.valueChanges.pipe(
      startWith(null),
      map((skill: string | null) => skill ? this.filter(skill) : this.allSkills.slice()));
  }

  ngOnInit(): void {
    this.isEdit = this.data.id !== 0;
  }

  add(event: MatChipInputEvent): void {

    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      if ((value || '').trim()) {
        this.data.notes.push(value.trim());
      }

      if (input) {
        input.value = '';
      }

      this.skillCtrl.setValue(null);
    }
  }

  remove(note: string) {
    const index = this.data.notes.indexOf(note);
    if (index >= 0) {
      this.data.notes.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.data.notes.push(event.option.viewValue);
    this.skillInput.nativeElement.value = '';
    this.skillCtrl.setValue(null);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allSkills.filter(skill => skill.toLowerCase().indexOf(filterValue) === 0);
  }
}
