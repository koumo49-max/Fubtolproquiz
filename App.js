import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>¡Bienvenido a Fubtolproquiz!</Text>
      <Text>¿Quién ganó el mundial de 2022?</Text>
    </View>
  );
}
