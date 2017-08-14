
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';

import Tag from '../../components/tag'

import TopicDetail from '../topic-detail'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('https://cnodejs.org/api/v1/topics?tab=all')
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

  detailHandler(content, title) {
    const nextRoute = {
      component: TopicDetail,
      title: title,
      passProps: {
        content: content
      }
    };

    this.props.navigator.push(nextRoute)
  }

  /**
   * [dateDiff 算时间差]
   * @param  {[type=Number]} hisTime [历史时间戳，必传]
   * @return {[string]}         [string]
   */
  dateDiff(hisTime){
    if(!arguments.length) return '';

    let arg = arguments,
        now =arg[1] ? arg[1] : new Date().getTime(),
        diffValue = now - new Date(arg[0]).getTime(),
        result='',

        minute = 1000 * 60,
        hour = minute * 60,
        day = hour * 24,
        halfamonth = day * 15,
        month = day * 30,
        year = month * 12,

        _year = diffValue/year,
        _month =diffValue/month,
        _week =diffValue/(7*day),
        _day =diffValue/day,
        _hour =diffValue/hour,
        _min =diffValue/minute;

    if(_year>=1) result=parseInt(_year) + "年前";
    else if(_month>=1) result=parseInt(_month) + "个月前";
    else if(_week>=1) result=parseInt(_week) + "周前";
    else if(_day>=1) result=parseInt(_day) +"天前";
    else if(_hour>=1) result=parseInt(_hour) +"个小时前";
    else if(_min>=1) result=parseInt(_min) +"分钟前";
    else result="刚刚";
    return result;
  }

  render() {
    const { data } = this.state

    return (
      <ScrollView style={ styles.topicScroll }>
        {
          data.map((v, i) => {
            return (
              <TouchableHighlight key={ i } onPress={ () => this.detailHandler(v.content, v.title) }>
                <View style={ styles.topicContainer }>
                  <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <Image source={{ url: v.author.avatar_url }}
                      style={{ height: 40, width: 40, marginRight: 10 }} />

                    <View style={{ flex: 1, justifyContent: 'space-between' }}>
                      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>{ v.author.loginname }</Text>
                        <Text style={{ textAlign: 'right' }}>{ v.reply_count + '/' + v.visit_count }</Text>
                      </View>
                      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Tag value={ v.tab } />
                        <Text style={{ textAlign: 'right' }}>{ '最后回复：' + this.dateDiff(v.last_reply_at) }</Text>
                      </View>
                    </View>

                  </View>
                  <Text style={{ paddingTop: 10, fontSize: 16, fontWeight: 'bold', lineHeight: 20 }}>
                    { v.title }
                  </Text>
                </View>
              </TouchableHighlight>
            )
          })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  topicScroll: {
    backgroundColor: '#ffffff',
    paddingBottom: 10,
  },
  topicContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#ffffff'
  }
})
