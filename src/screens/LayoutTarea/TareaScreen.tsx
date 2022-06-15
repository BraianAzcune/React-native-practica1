import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Caja from './Caja';
import { useState } from 'react';

const TareaScreen = () => {
  const [tarea, setTarea] = useState(0);
  const siguiente = () => {
    setTarea(prev => (prev < 10 ? prev + 1 : 0));
  };
  const anterior = () => {
    setTarea(prev => (prev > 0 ? prev - 1 : 10));
  };

  const reset = () => {
    setTarea(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cajaAzul}>
        <Caja simbolo={'+'} handlePress={siguiente} />
      </View>
      <View style={styles.cajaNaranja}>
        <Caja simbolo={'-'} handlePress={anterior} />
      </View>
      <View style={styles.cajaRoja}>
        <Caja simbolo={String(tarea)} handlePress={reset} />
      </View>
    </View>
  );
};

export default TareaScreen;

const mixStyle = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28425b',
    color: '#fff',
    flex: 1,
  },

  cajaNaranja: {
    ...mixStyle.caja,
    backgroundColor: '#ffc107',
  },
  cajaAzul: {
    ...mixStyle.caja,
    backgroundColor: '#2196f3',
  },
  cajaRoja: {
    ...mixStyle.caja,
    backgroundColor: '#f44336',
  },
});
