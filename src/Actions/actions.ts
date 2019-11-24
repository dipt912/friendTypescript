// import { 
//     CHANGE_SEARCH_FIELD,
//     FETCH_USER_START,
//     FETCH_USER_PENDING,
//     FETCH_USER_ERROR,
//     FETCH_USER_SUCCESS
//          } from '../constants';

import {
    ActionTypes,
    SetSearchField,
    FetchUsers,
    FetchUserResult,
    FetchUsersSuccess,
    FetchUsersPending,
    FetchUsersError
} from './index.model'


export const setSearchField = (text: string): SetSearchField => ({
    type: ActionTypes.CHANGE_SEARCH_FIELD,
    text
})

export const fetchUsers = (): FetchUsers => ({
    type: ActionTypes.FETCH_USER,
})

export const fetchUserResult = (users: Object): FetchUserResult => ({
    type: ActionTypes.FETCH_USER_RESULT,
    users
})

export const fetchUsersSuccess = (): FetchUsersSuccess => ({
    type: ActionTypes.FETCH_USER_SUCCESS,
})

export const fetchUsersPending = (): FetchUsersPending => ({
    type: ActionTypes.FETCH_USER_PENDING,
})

export const fetchUsersError = (): FetchUsersError => ({
    type: ActionTypes.FETCH_USER_ERROR,
})


// export const fetchUsers = async (dispatch:any) => {
//     dispatch({type: FETCH_USER_START})

//     try {
//         dispatch({type: FETCH_USER_PENDING})
//         const user = await fetchRobots();
//         dispatch({type: FETCH_USER_SUCCESS, payload: user})
//         console.log('users', user)
//     } catch(err) {
//         dispatch({type: FETCH_USER_ERROR})
//     }

// }

