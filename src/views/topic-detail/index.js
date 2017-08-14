
import React, { Component, PropTypes } from 'react'
import {
  View
} from 'react-native'


export default class TopicDetail extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    content: PropTypes.string.isRequired
  }

  render() {

    return (
      <View>
        { this.props.content }
      </View>
    )
  }
}
