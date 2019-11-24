import { all, call, fork, takeEvery, put } from 'redux-saga/effects'
import { ActionTypes } from '../Actions/index.model'
import { fetchRobots } from '../Api'
import { fetchUserResult, fetchUsersSuccess, fetchUsersPending} from '../Actions/actions'

function* fetchUserCall() {
try {
    const users =  yield call(fetchRobots)
    yield put(fetchUserResult(users))
    yield put(fetchUsersSuccess())
} catch(err) {
    yield put(fetchUsersPending())
}
}

function* watchFetchUser() {
    yield takeEvery(ActionTypes.FETCH_USER, fetchUserCall)
}

export default function* allWatchers() {
    yield all([
      fork(watchFetchUser),
      
    ])
  }