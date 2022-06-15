import { View, NativeModules, LayoutAnimation } from 'react-native';
import React from 'react';
import Caja from './Caja';
import { useState } from 'react';
import { getStyle } from './estilos';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const TareaScreen = () => {
  const [tarea, setTarea] = useState(0);
  const siguiente = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setTarea(prev => (prev < 10 ? prev + 1 : 0));
  };
  const anterior = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setTarea(prev => (prev > 0 ? prev - 1 : 10));
  };
  const reset = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setTarea(0);
  };

  const estilo = getStyle(tarea);

  return (
    <View style={estilo.container}>
      <View style={estilo.cajaVioleta}>
        <Caja simbolo={'+'} handlePress={siguiente} />
      </View>
      <View style={estilo.cajaNaranja}>
        <Caja simbolo={'-'} handlePress={anterior} />
      </View>
      <View style={estilo.cajaCeleste}>
        <Caja simbolo={String(tarea)} handlePress={reset} />
      </View>
    </View>
  );
};

export default TareaScreen;
