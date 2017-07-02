import { SET_COMPLETED } from '../constatns';

export default (state = [], action: any) => {
    switch (action.type) {
        case SET_COMPLETED:
            const { completedGoals } = action;
            return completedGoals;
        default:
            return state;
    }
};