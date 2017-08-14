
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import Tag from '../../components/tag'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
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
      <ScrollView style={ styles.topicScroll }>
        {
          data.map((v, i) => {
            return (
              <View style={ styles.topicContainer } key={ i }>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                  <Image source={{ url: v.author.avatar_url }}
                    style={{ height: 40, width: 40, marginRight: 10 }} />

                  <View style={{ flex: 1, justifyContent: 'space-between' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text>{ v.author.loginname }</Text>
                      <Text style={{ textAlign: 'right' }}>{ v.reply_count + '/' + v.visit_count }</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Tag value={ v.tab } />
                      <Text style={{ textAlign: 'right' }}>{ '最后回复：' + v.last_reply_at }</Text>
                    </View>
                  </View>


                </View>
                <Text style={{ paddingTop: 10, fontSize: 16, fontWeight: 'bold', lineHeight: 20 }}>
                  { v.title }
                </Text>
              </View>
            )
          })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  topicScroll: {
    backgroundColor: '#dddddd',
    paddingBottom: 10,
  },
  topicContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#ffffff'
  }
})
