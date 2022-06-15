import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

type Props = {
  simbolo: string;
  handlePress: () => void;
};

const Caja = (props: Props) => {
  return (
    <TouchableOpacity style={styles.cajaInterna} onPress={props.handlePress}>
      <Text style={styles.texto}>{props.simbolo}</Text>
    </TouchableOpacity>
  );
};

export default Caja;

const styles = StyleSheet.create({
  cajaInterna: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
