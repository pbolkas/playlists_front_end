import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import playerReducer from './PlayerReducer';
import playlistReducer from './PlaylistReducer'
import userReducer from './UserReducer';
import liveShareReducer from './LiveShareReducer';


export default (history) => combineReducers({
  router: connectRouter(history),
  player: playerReducer,
  playlist : playlistReducer,
  user: userReducer,
  liveShare: liveShareReducer,
});