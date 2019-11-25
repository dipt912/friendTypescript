
import { Actions, ActionTypes } from '../Actions/index.model';
import { Robot } from '../Interfaces';



export interface IRequestUserIntiState {
    robots : Robot[] ,
    isPending: boolean,
    error : string,
    selectedId: string,
    selectedUser: Robot | null,
  }

const intialStage: IRequestUserIntiState | {} = {
    robots : [],
    isPending: false,
    error : '',
    selectedId:'',
    selectedUser:null
}




export const requestUsers = (state = intialStage , action: Actions ) => {
    switch (action.type) {
        case ActionTypes.FETCH_USER_RESULT:
            return { ...state, robots: action.users, isPending: false }
        case ActionTypes.FETCH_USER_SUCCESS:
            return { ...state, isPending: false }
        case ActionTypes.FETCH_USER_ERROR:
            return { ...state, isPending: false, error: 'Failed To fetch users' }
        case ActionTypes.FETCH_USER_PENDING:
            return { ...state, isPending: true };
        case ActionTypes.SELECTED_USER:
            return { ...state, selectedId: action.id };
        default:
            return state;
    }
}