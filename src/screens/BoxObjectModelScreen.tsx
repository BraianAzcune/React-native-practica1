import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function BoxObjectModelScreen() {
  const [title, setTitle] = useState(1);
  const [generateText, setGenerateText] = useState('');
  useEffect(() => {
    setGenerateText('hola '.repeat(3 + title));
  }, [title]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BoxObjectModelScreen</Text>
      <View style={styles.twoObjectsContainer}>
        <Button
          onPress={() => setTitle(prev => (prev > 1 ? prev - 1 : prev))}
          title="Anterior"
          color="blue"
        />
        <Button
          onPress={() => setTitle(prev => prev + 1)}
          title="Siguiente"
          color="blue"
        />
      </View>
      <View>
        <Text style={styles.title}>Titulo {title}</Text>
        <Text style={styles.text}>{generateText}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          disabled={title === 1}
          title="Volver inicio pagina"
          onPress={() => setTitle(1)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  title: {
    fontSize: 20,
    padding: 40,
    color: 'black',
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    paddingHorizontal: 40,
    textAlign: 'center',
    color: 'darkslategrey',
  },
  debugBorder: {
    borderWidth: 1,
    borderColor: 'red',
    opacity: 0.8,
  },
  twoObjectsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 30,
  },
});
