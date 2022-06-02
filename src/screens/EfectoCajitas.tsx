import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default function EfectoCajitas() {
  let cajas = [];
  for (let i = 0; i < 50; i++) {
    const color = getRandomColor();
    cajas.push(
      <View
        key={i}
        style={{
          ...styles.caja,
          backgroundColor: color,
        }}
      />,
    );
  }

  return <View style={styles.container}>{cajas}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28c4d9',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  caja: {
    width: '20%',
    height: '10%',
    borderWidth: 5,
    borderColor: '#fff',
  },
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
