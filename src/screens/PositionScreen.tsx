import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function PositionScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28c4d9',
    flex: 1,
  },
  cajaMorada: {
    backgroundColor: '#8800ff',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#fff',
  },
  cajaNaranja: {
    backgroundColor: '#ff8c00',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#fff',
  },
});
