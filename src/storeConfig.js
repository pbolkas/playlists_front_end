import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import {routerMiddleware} from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist'
import {composeWithDevTools} from 'redux-devtools-extension';
import rootSaga from './Sagas';
import storage from 'redux-persist/lib/storage'
import createRootReducer from './Reducers';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const persistConfig = {
  key: 'root',
  storage
}
const middleware = [sagaMiddleware, routerMiddleware(history)];

const persistedReducer = persistReducer(persistConfig, createRootReducer(history));


export default () => {
  let store = createStore(persistedReducer,
    composeEnhancers(applyMiddleware(...middleware),));

  let persistor = persistStore(store);

  sagaMiddleware.run(rootSaga)

  return { store, persistor };
}