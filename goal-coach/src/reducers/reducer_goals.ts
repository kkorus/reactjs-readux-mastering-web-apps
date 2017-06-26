import { SET_GOALS } from '../constatns';

export default (state = [], action: any) => {
    switch (action.type) {
        case SET_GOALS:
            debugger;
            const { payload } = action;
            return payload;
        default:
            return state;
    }
}