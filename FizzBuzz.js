import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Play from './Play';

export default class iosFizzBuzz extends Component {
  render() {
    return (
      <Text>{Play(this.props.randomName)}</Text>
    );
  }
}
