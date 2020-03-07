import React, { Suspense,Component } from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from "@material-ui/core";
import {createMuiTheme} from "@material-ui/core";
import Routes from './routes';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from './storeConfig';

const { store, persistor } = createStore();

const theme = createMuiTheme({
  palette:{
    primary :{
      main: "#d3e298"
    },
    secondary:{
      main : "#CDE7BE"
    }    
  },
  // spacing: factor => [0, 4, 8, 16, 32, 64][factor],
  typography:{
    useNextVariants: true,
    fontFamily:[
      'Sans-Serif'
    ].join(','),
    
  }
})

class App extends Component {
  render(){
    return (
      <Suspense fallback="loading">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <MuiThemeProvider theme={theme}>
              <Routes />
            </MuiThemeProvider>
          </PersistGate>
        </Provider>
      </Suspense>
    )
  }
}

export default App;
