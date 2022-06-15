import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  NativeModules,
  LayoutAnimation,
} from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default function FlexScreen() {
  const [caja, setCaja] = React.useState([0, 0, 0]);
  // const [caja2, setCaja2] = React.useState(0);
  // const [caja3, setCaja3] = React.useState(0);

  const toggleSize = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setCaja(prev => {
      const newCaja = [...prev];
      newCaja[index] = caja[index] === 0 ? 1 : 0;
      return newCaja;
    });
  };

  return (
    <View style={styles.container}>
      {caja.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => toggleSize(index)}
          style={[styles.caja, { flex: item }]}>
          <Text style={styles.texto}>Caja {index + 1}</Text>
        </TouchableOpacity>
      ))}

      {/* <TouchableOpacity
        onPress={toggleSize}
        style={[styles.caja1, { flex: caja1 }]}>
        <Text style={styles.texto}>Caja 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.caja2}>
        <Text style={styles.texto}>Caja 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.caja3}>
        <Text style={styles.texto}>Caja 3</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#fff9',
  },
  caja: {
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#adf7f0',
    flex: 0,
  },
  texto: {
    fontSize: 30,
    backgroundColor: '#add2f7',
    fontWeight: 'bold',
  },
});
