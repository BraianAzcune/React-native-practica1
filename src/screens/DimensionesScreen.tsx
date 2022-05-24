import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

export default function DimensionesScreen() {
  console.log('DimensionesScreen.tsx');
  return (
    <View style={styles.container}>
      <View style={styles.orange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  purple: {
    backgroundColor: 'rgba(129,75,176,1)',
    width: '50%',
    height: '6%',
  },
  orange: {
    backgroundColor: 'rgba(255,165,0,1)',
    width: '50%',
    height: Dimensions.get('window').height / 2,
  },
});
