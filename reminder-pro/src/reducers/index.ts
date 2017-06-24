import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants.js';
import { bake_cookie, read_cookie } from 'sfcookies';

const createReminder = (action: any) => {
    let { text, dueDate } = action;
    return {
        id: Math.random(),
        text: text,
        dueDate
    }
}

const removeById = (state = [], id: number) => {
    const reminders = state.filter((reminder: any) => {
        return reminder.id !== id;
    })

    return reminders;
}

const clearReminders = () => {
    return [];
}

const reminders = (state = [], action: any) => {
    let reminders = null;
    state = read_cookie('reminders') || [];
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, createReminder(action)];
            bake_cookie('reminders', reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = removeById(state, action.id);
            bake_cookie('reminders', reminders);
            return reminders;
        case CLEAR_REMINDERS:
            reminders = clearReminders();
            bake_cookie('reminders', reminders);
            return reminders;
        default:
            return state;
    }
};

export default reminders

