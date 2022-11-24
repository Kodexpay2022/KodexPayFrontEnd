import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import {mainReducer} from './reducers/mainReducer';
import {globalReducer} from './reducers/globalReducer';

const reducers = combineReducers({
  mainReducer: mainReducer,
  globalReducer: globalReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
