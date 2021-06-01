import { createStore,applyMiddleware } from 'redux'
import logger from 'redux-logger';
import rootReducer from '../Redux/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga'
//persisting stuff
import {persistStore} from 'redux-persist'

const sagaMiddleware = createSagaMiddleware();

const middleware =[logger,sagaMiddleware]
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
sagaMiddleware.run(rootSaga);
//persisting stuff
export const persistor =persistStore(store)
