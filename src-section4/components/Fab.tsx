import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

interface Props {
  position?: 'left' | 'right';
  title: string;
  onPress?: () => void;
}

export default function Fab({ title, onPress, position = 'right' }: Props) {
  const positionStyle = position === 'left' ? { left: 20 } : { right: 20 };
  return (
    <View style={{ ...styles.circle, ...positionStyle }}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.multy}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    overflow: 'hidden',
    backgroundColor: 'rgba(121,75,65,1)',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  multy: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
