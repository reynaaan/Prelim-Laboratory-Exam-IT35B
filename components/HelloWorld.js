// Reynan Jhay A. Busano, Anven Moses L. Agbulos, Wyne Khristian B. Ipanag
// IT73/IT35B
// Application Development
// Date: Feb. 22, 2024

import React from 'react';
import { View, Text, Image } from 'react-native';

const HelloWorld = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={{
          uri: 'https://lh3.googleusercontent.com/proxy/RoPcmEVMBSgWrFW1o1e2zAMssiAvZHDxzHM_U2JaCEBn7r8nLUxiauFGk5Oy_Y8CJqOr0OZSJ9V3tJ_Mj4ITBJNOuwFT=s0-d',
        }}
        style={{ width: 200, height: 200, resizeMode: 'contain', marginTop: 50, marginBottom: 20 }}
      />
      <Text style={{ textAlign: 'center', fontSize: 46, fontWeight: 'bold'}}>Helloooooo, Wooooorld and everything!</Text>
    </View>
  );
};

export default HelloWorld;