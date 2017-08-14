
import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  Image,
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

    const style = {
      img: {
        resizeMode: 'cover',
        width: 100,
        height: 100
      }
    }

    return (
      <WebView source={{ html: this.props.content }}>

      </WebView>
    )
  }
}
