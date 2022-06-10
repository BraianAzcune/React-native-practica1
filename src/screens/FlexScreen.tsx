import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function FlexScreen() {
  const [caja1, setCaja1] = React.useState(0);
  // const [caja2, setCaja2] = React.useState(0);
  // const [caja3, setCaja3] = React.useState(0);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setCaja1(prev => +!prev)}
        style={[styles.caja1, { flex: caja1 }]}>
        <Text style={styles.texto}>Caja 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.caja2}>
        <Text style={styles.texto}>Caja 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.caja3}>
        <Text style={styles.texto}>Caja 3</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff9',
  },
  caja1: {
    borderWidth: 2,
    borderColor: 'white',
    flex: 0,
  },
  caja2: {
    borderWidth: 2,
    borderColor: 'white',
    flex: 0,
  },
  caja3: {
    borderWidth: 2,
    borderColor: 'white',
    flex: 0,
  },
  texto: {
    fontSize: 30,
  },
});
