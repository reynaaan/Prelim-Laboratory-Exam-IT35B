import React from 'react';
import { View } from 'react-native';
import HelloWorld from './components/HelloWorld';
import GreetUser from './components/Username';
import Counter from './components/Counter';

const App = () => {
  return (
    <View>
      <HelloWorld />
      <GreetUser username = "Ma'am Adel" />
      <Counter />
    </View>
  );
}

export default App;
