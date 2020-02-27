import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import {routerMiddleware} from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist'
import {composeWithDevTools} from 'redux-devtools-extension';
import rootSaga from './Sagas';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const middleware = [sagaMiddleware, routerMiddleware];

export default () => {
  let store = createStore(persistReducer, composeEnhancers(applyMiddleware(...middleware)));

  let persistor = persistStore(store);

  sagaMiddleware.run(rootSaga)

  return { store, persistor };
}