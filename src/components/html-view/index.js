

import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  Linking,
  StyleSheet
} from 'react-native'

import ImageContainer from '../image-container'

import HTMLView from 'react-native-htmlview'

import { defaultHtmlStyles } from './style'

export default class HtmlView extends Component {
  constructor(props) {
    super(props);
    this._handleLinkPress = this._handleLinkPress.bind(this)
    this._renderNode = this._renderNode.bind(this)
    this._images = {}
    let _styles = {}
    for (let key in defaultHtmlStyles) {
        if (props.style[key]) {
            _styles[key] = { ...defaultHtmlStyles[key], ...props.style[key] }
        } else {
            _styles[key] = defaultHtmlStyles[key]
        }
    }
    this._styles = StyleSheet.create(_styles)
  }

  static defaultProps = {
    style: {},
    value: ""
  }

  static propTypes = {
    value: PropTypes.string.isRequired,
    style: PropTypes.object,
  }

  _handleLinkPress(url) {
    Linking.canOpenURL(url).then(support => {
      if (support) {
        Linking.openURL(url)
      }
    }).catch(err => console.log(err))
  }

  _renderNode(node, index) {
    if (node.name == 'iframe') {
      return (
        <View key={'iframe_'+index} style={{width: 200, height: 200}}>
          <Text>{node.attribs.src}</Text>
        </View>
      )
    }
    if (node.name === 'img') {
      const uri = node.attribs.src
      if (uri.indexOf('http') === -1 && uri.indexOf('https') === -1) {
        uri = 'http:' + uri
      }
      return (
        <ImageContainer uri={ uri } key={ index } />
      )
    }
  }

  render() {

    return (
      <HTMLView
        style={{ padding: 10 }}
        value={ this.props.value }
        stylesheet={ this._styles }
        onLinkPress={this._handleLinkPress}
        renderNode={this._renderNode} />
    )
  }
}
