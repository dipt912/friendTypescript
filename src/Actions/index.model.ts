export enum ActionTypes {
    CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD',
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_START = 'FETCH_USER_START',
    FETCH_USER_PENDING = 'FETCH_USER_PENDING',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_RESULT ='FETCH_USER_RESULT',
    SELECTED_USER= 'SELECTED_USER'

}

export interface SetSearchField {
    type: ActionTypes.CHANGE_SEARCH_FIELD,
    text: string
}

export interface FetchUsers {
    type: ActionTypes.FETCH_USER,
}

export interface FetchUserResult {
    type: ActionTypes.FETCH_USER_RESULT,
    users: Object
}

export interface FetchUsersSuccess {
    type: ActionTypes.FETCH_USER_SUCCESS,
}

export interface FetchUsersPending {
    type: ActionTypes.FETCH_USER_PENDING,
}

export interface FetchUsersError {
    type: ActionTypes.FETCH_USER_ERROR,
}


export interface SelectedUser {
    type: ActionTypes.SELECTED_USER,
    id:number
}

export type Actions =
    SetSearchField
    | FetchUsers
    | FetchUserResult
    | FetchUsersSuccess
    | FetchUsersPending
    | FetchUsersError
    | SelectedUser;