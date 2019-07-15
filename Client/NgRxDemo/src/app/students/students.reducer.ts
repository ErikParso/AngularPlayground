import { Student } from './Models/student';
import { Action, createReducer, on, createSelector } from '@ngrx/store';
import * as StudentsActions from './students.actions';
import * as fromRoot from '../app.reducer';

export interface StudentsState {
    students: Student[];
    currentStudent: Student;
}

export const initialState: StudentsState = {
    students: [],
    currentStudent: null
};

export interface AppState extends fromRoot.AppState {
    students: StudentsState;
}

export const studentsSelector = (state: AppState) => state.students;

export const currentStudentSelector = createSelector(
    studentsSelector,
    (state: StudentsState) => state.currentStudent
);

const studentsReducer = createReducer<StudentsState>(
    initialState,
    on(StudentsActions.setCurrentStudent, (state, payLoad) => ({ ...state, currentStudent: payLoad }))
);

export function reducer(state: StudentsState, action: Action) {
    return studentsReducer(state, action);
}