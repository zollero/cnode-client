/**
 * Image组件
 * 默认全屏宽度，高度按比例计算
 */

import React, { Component, PropTypes } from 'react'
import {
  Image,
  Dimensions
} from 'react-native'

const screenWidth = Dimensions.get("window").width;

export default class ImageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: screenWidth - 20,
      height: 100
    }
  }

  static propTypes = {
    uri: PropTypes.string.isRequired,
    style: PropTypes.object
  }

  componentDidMount() {
    const { uri } = this.props
    Image.getSize(uri, (width, height) => {
      height = screenWidth * height / width; //按照屏幕宽度进行等比缩放
      this.setState({
        height: height
      });
    });
  }

  render() {
    const { height, width } = this.state
    const { uri, style } = this.props
    let styles = {
      height: height,
      width: width,
      resizeMode: Image.resizeMode.contain
    }

    if (style) {
      styles = { ...styles, ...style}
    }

    return (
      <Image style={styles} source={{uri: uri}} resizeMode="center" />
    )
  }
}
