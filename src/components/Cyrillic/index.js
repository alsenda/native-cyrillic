import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from '../../assets/styles';

class cyrillic extends Component {
  render() {
    return (
      <Text style={styles.cyrillic}>{this.props.char.cyrillic.upper}</Text>
    )
  }
}

export default cyrillic;