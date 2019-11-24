import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
const logger = createLogger();
export const sagaMiddleware = createSagaMiddleware()

export default [sagaMiddleware, logger]