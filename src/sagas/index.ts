import { all, fork } from 'redux-saga/effects'
import userSaga from './fetchUserSaga'


export default function* rootSaga() {
  yield all([
    fork(userSaga),
  ])
}
