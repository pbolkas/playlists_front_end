import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import playerReducer from './PlayerReducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  player: playerReducer,
});