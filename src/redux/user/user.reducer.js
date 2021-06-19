import { userActionTypes } from './user.types'

const INITIAL_STATE = {
    currentUser: null
};

//setting INITIAL_STATE default parameter value for statestate in case it is undefined when the action is called
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;