
import React, { Component, PropTypes } from 'react'
import { Text, StyleSheet } from 'react-native'

import Tags from './tag-config'

export default class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      bgColor: '#ddd'
    }
  }

  static propTypes = {
    value: PropTypes.string
  }

  componentDidMount() {
    const { value } = this.props
    const tag = Tags.filter(v => {
      return v.value === value
    })[0]

    if (tag) {
      this.setState({
        name: tag.text,
        bgColor: tag.bgColor
      })
    } else {
      this.setState({
        name: value
      })
    }
  }

  render() {
    const { name, bgColor } = this.state

    const style = {
      backgroundColor: bgColor,
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      height: 20,
      lineHeight: 20,
      paddingLeft: 5,
      paddingRight: 5,
      fontSize: 12
    }

    return (
      <Text style={ style }>
        { name }
      </Text>
    )
  }
}
