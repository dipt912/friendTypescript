import { 
    CHANGE_SEARCH_FIELD,
    FETCH_USER_START,
    FETCH_USER_PENDING,
    FETCH_USER_ERROR,
    FETCH_USER_SUCCESS
         } from './constants';
import { fetchRobots } from './Api'

export const  setSearchField = (text:string) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const fetchUsers = async (dispatch:any) => {
    dispatch({type: FETCH_USER_START})

    try {
        dispatch({type: FETCH_USER_PENDING})
        const user = await fetchRobots();
        dispatch({type: FETCH_USER_SUCCESS, payload: user})
        console.log('users', user)
    } catch(err) {
        dispatch({type: FETCH_USER_ERROR})
    }
   
}

