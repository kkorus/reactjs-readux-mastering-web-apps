import { SIGNED_IN, SET_GOALS, SET_COMPLETED } from '../constatns';
import { createAction } from 'redux-actions';

export const logUser = createAction(SIGNED_IN, (email: string) => email);
export const setGoals = createAction(SET_GOALS, (goals: any[]) => goals);
export const setCompleted = createAction(SET_COMPLETED, (completedGoals: any[]) => completedGoals);