import { createReducer, ActionReducerMap, createSelector, createAction, props, on } from '@ngrx/store';

export interface State {
    userInfo: UserInfoState;
}

export interface UserInfoState {
    name: string;
    age: number;
}

export const setName = createAction('[App] Set property 1', props<{value: string}>());
export const increaseAge = createAction('[App] Set property 2');

export const userInfoSelector = (state: State) => state.userInfo;
export const nameSelector = createSelector(
    userInfoSelector,
    userInfo => userInfo.name
);
export const ageSelector = createSelector(
    userInfoSelector,
    userInfo => userInfo.age
);

const appReducer = createReducer<UserInfoState>(
    { name: 'Erik Parso', age: 25 },
    on(setName, (s, p) => ({...s, name: p.value})),
    on(increaseAge, (s) => ({...s, age: s.age + 1}))
);

export const reducers: ActionReducerMap<State> = {
    userInfo: appReducer
};
