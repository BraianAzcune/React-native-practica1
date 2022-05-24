/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import Fab from '../components/Fab';

import basic from '../styles/basic';

export default function ContadorScreen() {
  const [contador, setContador] = useState(0);

  return (
    <View style={[basic.container, basic.centerAll]}>
      <Text style={basic.title}>Contador: {contador}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
        }}>
        <Button title="Restar" onPress={() => setContador(contador - 1)} />
        <Button title="Sumar" onPress={() => setContador(contador + 1)} />
      </View>
      <Fab
        position="left"
        title="*10"
        onPress={() => setContador(prev => prev * 10)}
      />
      <Fab title="/10" onPress={() => setContador(prev => prev / 10)} />
    </View>
  );
}
