// Anven Moses L. Agbulos, Reynan Jhay A. Busano, Wyne Khristian B. Ipanag - IT73/IT35B
// IT73/IT35B
// Application Development
// Date: Feb. 22, 2024

import React from 'react';
import { View, Text } from 'react-native';

const GreetUser = ({ username }) => {
  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>
        Helloooo poooooo, {username}!
      </Text>
    </View>
  );
};

export default GreetUser;
