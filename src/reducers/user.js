import {Types} from '../actions/user'

export const initialState = {
    user: [],
    error: false
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_USER:
            return {
                ...state
            };
        case Types.SUCCESS_USER:
            return {
                ...state,
                user: action.payload.data[0],
                error: false
            };
        case Types.ERROR_USER:
            return {
                ...state,
                error: true
            };
        default:
            return state
    }
};