/**
 * @format
 */
 import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
//import { TownsReducer } from './src/reducers/TownReducer';
import { TownsReducer } from './src/Reducers/TownReducer';

import Amplify from 'aws-amplify';
import config from './src/aws-exports';

Amplify.configure(config);

const reducers = combineReducers({
     towns: TownsReducer,
  });

  const store = createStore(reducers, compose(applyMiddleware(thunk)));

  const ReduxApp = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );



AppRegistry.registerComponent(appName, () => ReduxApp);
