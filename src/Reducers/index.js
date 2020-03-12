import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import playerReducer from './PlayerReducer';
import playlistReducer from './PlaylistReducer'


export default (history) => combineReducers({
  router: connectRouter(history),
  player: playerReducer,
  playlist : playlistReducer
});