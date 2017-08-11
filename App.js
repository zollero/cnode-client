import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('https://cnodejs.org/api/v1/topics')
    .then(res => {
      return res.json()
    }).then(response => {
      console.log(response)
      const { success, data } = response
      if (success) {
        this.setState({
          data: data
        })
      }
    })
  }
  render() {
    const { data } = this.state

    return (
      <View style={styles.container}>
          <ScrollView>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          {
            data.map((v, i) => {
              return <Text key={ i }>{ v.title }</Text>
            })
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
