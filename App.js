import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Home from './src/views/home'

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
          <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
