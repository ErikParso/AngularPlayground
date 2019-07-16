import { createAction, props } from '@ngrx/store';
import { Student } from './Models/student';

export const loadStudents = createAction(
    '[Students] Load students'
);

export const loadStudentsSuccess = createAction(
    '[Students] Load students success',
    props<{value: Student[]}>()
);

export const loadStudentsError = createAction(
    '[Students] Load students error'
);

export const setCurrentStudent = createAction(
    '[Students] Set current student',
    props<Student>()
);
