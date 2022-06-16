import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import combineReducers from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(combineReducers, composeEnhancers(applyMiddleware(thunk)))

export default store
