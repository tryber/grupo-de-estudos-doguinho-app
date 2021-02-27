import { combineReducers } from 'redux';
import dogReducer from './dogReducer';

const rootReducer = combineReducers( { dogReducer } );

export default rootReducer;
