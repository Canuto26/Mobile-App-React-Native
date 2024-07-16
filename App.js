import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TouchableOpacity } from 'react-native'; 

const App = () => {
  const handlePress = (screen) => {
    console.log('Ir a ${screen}');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Funciona!</Text>
      <Text style={styles.subtitle}>El componente de prueba está funcionando correctamente.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('Iniciar sesión')}>
          <Text style={styles.buttonText}>Ir a Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('Crear cuenta')}>
          <Text style={styles.buttonText}>Ir a Crear cuenta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('Crear evento')}>
          <Text style={styles.buttonText}>Ir a Crear evento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('Página del evento')}>
          <Text style={styles.buttonText}>Ir a la página del evento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('Información de la cuenta')}>
          <Text style={styles.buttonText}>Ir a Información de la cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
  },
});

export default App;