import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

export default function EfectoCajitas() {
  // 5 x 10 cantidad de cajas.

  const [cajasApagadas, setCajasApagadas] = useState<number[]>([]);
  let cajas = [];
  const handleClick = (i: number) => {
    setCajasApagadas(cajasApagadas.concat(i));
  };

  for (let i = 0; i < 50; i++) {
    if (cajasApagadas.includes(i)) {
      cajas.push(
        <View style={{ ...styles.caja, backgroundColor: 'black' }} key={i} />,
      );
      continue;
    }
    const color = getPseudoRandomColor(i);
    cajas.push(
      <TouchableWithoutFeedback key={i} onPress={() => handleClick(i)}>
        <View
          key={i}
          style={{
            ...styles.caja,
            backgroundColor: color,
          }}
        />
      </TouchableWithoutFeedback>,
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

function sfc32(a: number = 12, b: number = 11, c: number = 10) {
  return function (d: number) {
    a >>>= 0;
    b >>>= 0;
    c >>>= 0;
    d >>>= 0;
    var t = (a + b) | 0;
    a = b ^ (b >>> 9);
    b = (c + (c << 3)) | 0;
    c = (c << 21) | (c >>> 11);
    d = (d + 1) | 0;
    t = (t + d) | 0;
    c = (c + t) | 0;
    return (t >>> 0) / 4294967296;
  };
}

const pseudoRandom = sfc32();

function getPseudoRandomColor(index: number) {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[pseudoRandom(pseudoRandom(index) * 16)];
  }
  return color;
}
