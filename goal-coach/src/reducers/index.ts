import { SIGNED_IN } from '../constatns';

let user = {
    email: null
}

export default (state = user, action: any) => {
    switch (action.type) {
        case SIGNED_IN:
            const { email } = action;
            user = {
                email: email
            }

            return user;
        default:
            return state;
    }
}