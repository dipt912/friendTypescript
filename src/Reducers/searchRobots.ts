
import { Actions, ActionTypes } from '../Actions/index.model';


export interface ISearchRobotsInitState {
    searchField:string;
  }
const intialStage:ISearchRobotsInitState | {}  = {
    searchField : '',
}

export const searchRobots = (state=intialStage, action:Actions) => {
    switch(action.type) {
        case ActionTypes.CHANGE_SEARCH_FIELD:
           return { ...state, searchField : action.text } 
        default:
        return state;   
    }
}
