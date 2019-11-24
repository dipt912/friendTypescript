import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from './sagas/index'
import { sagaMiddleware } from './middleware'

import {rootReducer} from './Reducers'
import middleware  from './middleware'


export default (() => {
    const store = createStore(combineReducers(
      rootReducer,
      ),
     applyMiddleware(...middleware))
    sagaMiddleware.run(rootSaga)
    return store
  })()