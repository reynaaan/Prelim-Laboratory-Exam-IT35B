//  Anven Moses L. Agbulos, Wyne Khristian B. Ipanag, Reynan Jhay A. Busano - IT73/IT35B
// Date: [Feb. 22, 2024]

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  }

  resetCount = () => {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <View>
        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'semibold' }}>Count: {this.state.count}</Text>
        <Button title="+" onPress={this.incrementCount} color="orange"/>
        <Button title="-" onPress={this.decrementCount} color="orange"/>
        <Button title="Reset" onPress={this.resetCount} color="gray"/>
      </View>
    );
  }
}

export default Counter;
