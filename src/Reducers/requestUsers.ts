
import { FETCH_USER_SUCCESS, FETCH_USER_ERROR , FETCH_USER_PENDING } from '../constants';

const intialStage = {
    robots : [],
    isPending: false,
    error : '',
}




export const requestUsers = (state = intialStage, action:any = {}) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return { ...state, robots: action.payload, isPending: false }
        case FETCH_USER_ERROR:
            return { ...state, isPending: false, error: 'Failed To fetch users' }
        case FETCH_USER_PENDING:
            return { ...state, isPending: true }
        default:
            return state;
    }
}