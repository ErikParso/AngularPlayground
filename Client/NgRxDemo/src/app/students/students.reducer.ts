import { Student } from './Models/student';
import { Action, createReducer, on, createSelector } from '@ngrx/store';
import * as StudentsActions from './students.actions';
import * as fromRoot from '../app.reducer';

export interface StudentsState {
    allStudents: Student[];
    currentStudent: Student;
    errorMessage: string;
}

export const initialState: StudentsState = {
    allStudents: [],
    currentStudent: null,
    errorMessage: null
};

export interface State extends fromRoot.State {
    students: StudentsState;
}

export const studentsSelector = (state: State) => state.students;

export const currentStudentSelector = createSelector(
    studentsSelector,
    (state: StudentsState) => state.currentStudent
);

export const allStudentsSelector = createSelector(
    studentsSelector,
    (state: StudentsState) => state.allStudents
);

export const errorMessageSelector = createSelector(
    studentsSelector,
    (state: StudentsState) => state.errorMessage
);

const studentsReducer = createReducer<StudentsState>(
    initialState,
    on(StudentsActions.setCurrentStudent, (state, {payload}) => ({ ...state, currentStudent: payload })),
    on(StudentsActions.loadStudentsSuccess, (state, {payload}) => ({ ...state, allStudents: payload, currentStudent: payload[0] })),
    on(StudentsActions.loadStudentsError, (state) => ({ ...state, errorMessage: 'Load students failed' }))
);

export function reducer(state: StudentsState, action: Action) {
    return studentsReducer(state, action);
}
