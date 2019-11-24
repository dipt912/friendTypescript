import { searchRobots, ISearchRobotsInitState } from './searchRobots';
import { requestUsers, IRequestUserIntiState } from './requestUsers'
import { combineReducers } from 'redux';

export interface RootState {
    searchRobots: ISearchRobotsInitState
    requestUsers: IRequestUserIntiState
  }

export const rootReducer  = {
    searchRobots:searchRobots,
    requestUsers:requestUsers,
}

export default () => combineReducers(searchRobots)