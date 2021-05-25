import { createStore,applyMiddleware } from 'redux'
import logger from 'redux-logger';
import rootReducer from '../Redux/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
//persisting stuff
import {persistStore} from 'redux-persist'
const middleware =[logger]
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
//persisting stuff
export const persistor =persistStore(store)
