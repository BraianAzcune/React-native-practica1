import React, { useEffect, useState } from 'react';
import { StyleSheet, StyleProp, Text, View, ViewStyle } from 'react-native';

export default function HolaMundoScreen() {
  const [black, setblack] = useState(true);

  const estiloContenedor: StyleProp<ViewStyle> = {
    flex: 1,
    backgroundColor: black ? 'black' : 'rgb(0,191,255)',
    justifyContent: 'center',
    alignItems: 'center',
  };

  useEffect(() => {
    setInterval(() => setblack(prev => !prev), 5000);
  }, []);

  return (
    <View style={estiloContenedor}>
      <Text style={styles.title}>¡Hola Mundo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    textAlign: 'center',
  },
});
