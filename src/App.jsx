import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Routes from './routes';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from './storeConfig';

const { store, persistor } = createStore();

const App = () => {
  return (
    <Suspense fallback="loading">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </Suspense>
  )
}

export default App;
