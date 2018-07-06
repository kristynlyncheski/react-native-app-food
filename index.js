// Import a library to help create a component
import React from 'react';
import { AppRegistry, View, } from 'react-native';
import Header from './src/components/Header';
import BusinessList from './src/components/BusinessList';

// Create a component
const App = () => (
  <View style={{ flex: 1 /* This is to fix scrolling */ }}>
    <Header headerText={'What\'s Open'} />
    <BusinessList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('food', () => App);
