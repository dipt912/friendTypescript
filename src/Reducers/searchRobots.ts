
import { CHANGE_SEARCH_FIELD } from '../constants';

const intialStage = {
    searchField : '',
}

export const searchRobots = (state=intialStage, action:any = {}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
           return { ...state, searchField : action.payload } 
        default:
        return state;   
    }
}
