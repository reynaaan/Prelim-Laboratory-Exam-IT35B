import React from 'react';
import { View, StyleSheet } from 'react-native';
import HelloWorld from './components/HelloWorld';
import GreetUser from './components/Username';
import Counter from './components/Counter';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <HelloWorld />
        <GreetUser username="Ma'am Adel" />
        <Counter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  boxContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'lightgray',
  },
});

export default App;
