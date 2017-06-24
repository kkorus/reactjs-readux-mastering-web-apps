import { SIGNED_IN } from '../constatns';

let user = {
    email: null
}

export default (state = user, action: any) => {
    switch (action.type) {
        case SIGNED_IN:
            const { payload } = action;
            user = {
                email: payload
            }

            return user;
        default:
            return state;
    }
}