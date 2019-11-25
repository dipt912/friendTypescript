import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import {  routerMiddleware } from 'connected-react-router'
import history from './lib/history'
const logger = createLogger();
export const sagaMiddleware = createSagaMiddleware()

export default [sagaMiddleware, logger, routerMiddleware(history) ]