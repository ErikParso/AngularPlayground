import { createAction, props, Action, ActionCreator } from '@ngrx/store';
import { Student } from './Models/student';

export enum StudentActions {
    loadStudents = '[Students] Load students',
    loadStudentsSuccess = '[Students] Load students success',
    loadStudentsError = '[Students] Load students error',
    setCurrentStudent = '[Students] Set current student',
    addStudent = '[Students] Add new student',
    addStudentSuccess = '[Students] Add new student success',
    addStudentError = '[Students] Add new student error',
    editStudent = '[Students] Edit student',
    editStudentSuccess = '[Students] Edit student success',
    editStudentError = '[Students] Edit student error'
}

export const loadStudents = createAction(
    StudentActions.loadStudents
);

export const loadStudentsSuccess = createAction(
    StudentActions.loadStudentsSuccess,
    props<{ payload: Student[] }>()
);

export const loadStudentsError = createAction(
    StudentActions.loadStudentsError
);

export const setCurrentStudent = createAction(
    StudentActions.setCurrentStudent,
    props<{ payload: Student }>()
);

export class AddStudentAction implements Action {
    type = StudentActions.addStudent;
    constructor(public payload: Student) { }
}

export const addStudentSuccess = createAction(
    StudentActions.addStudentSuccess,
    props<{ payload: Student }>()
);

export const addStudentError = createAction(
    StudentActions.addStudentError
);

export class EditStudentAction implements Action {
    type = StudentActions.editStudent;
    constructor(public payload: Student) { }
}

export const EditStudentSuccess = createAction(
    StudentActions.editStudentSuccess,
    props<{ payload: Student }>()
);

export class EditStudentSuccessAction implements Action {
    type = StudentActions.editStudentSuccess;
    constructor(public payload: Student) { }
}

export const EditStudentError = createAction(
    StudentActions.editStudentError
);
