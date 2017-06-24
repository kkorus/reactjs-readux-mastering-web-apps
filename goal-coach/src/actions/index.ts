import { SIGNED_IN } from '../constatns';
import { createAction } from 'redux-actions';

export const logUser = createAction(SIGNED_IN, (email: string) => email);