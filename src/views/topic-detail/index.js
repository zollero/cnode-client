
import React, { Component, PropTypes } from 'react'
import {
  View,
  ScrollView,
  Text,
  Linking,
  Image,
  Dimensions,
  StyleSheet,
  WebView
} from 'react-native'

import HtmlView from '../../components/html-view'

export default class TopicDetail extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    content: PropTypes.string
  }


  render() {

    return (
      <ScrollView>
        <HtmlView
          value={ this.props.content } />
      </ScrollView>
    )
  }
}
