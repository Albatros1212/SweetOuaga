/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeScreen from './src/screens/Home/index';
import SearchResultsScreen from './src/screens/SearchResults';
import feed from './assets/data/feed';
import GuestScreen from './src/screens/Guests';
import Post from './src/Components/Post/Index';
import Router from './src/Components/navigations/Router';

import { withAuthenticator } from 'aws-amplify-react-native/dist/Auth';

const post1 = feed[0];

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;

//export default withAuthenticator (App);
