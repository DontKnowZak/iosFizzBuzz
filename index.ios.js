import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import FizzBuzz from './FizzBuzz';
import Button from 'react-native-button';

class iosFizzBuzz extends Component {
  constructor(props) {
    super(props);
    this.state = { currentNumber: 1 };
  }

  _incrementNumber() {
    var newNumber = this.state.currentNumber + 1;
    this.setState({ currentNumber: newNumber});
  }

  render() {
    let number = this.state.currentNumber
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          <FizzBuzz randomName={number}/>
        </Text>
        <Button onPress={() => this._incrementNumber()}>
          Next!
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 72,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('iosFizzBuzz', () => iosFizzBuzz);
