
import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  WebView
} from 'react-native'


export default class TopicDetail extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    // content: PropTypes.Object
  }

  render() {

    return (
      <WebView source={{ html: this.props.content }}>

      </WebView>
    )
  }
}
