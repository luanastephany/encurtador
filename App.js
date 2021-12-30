import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [url, setUrl] = useState('')
  const [name, setName] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>url
        <Text style={{color: '#1076f7'}}>Sujeito</Text>
      </Text>

      <TextInput 
        style={styles.urlInput} 
        onChangeText={(texto) => setUrl(texto)} 
        value={url} 
        placeholder="Digite a url" 
      />

      <TextInput 
        style={styles.urlInput} 
        onChangeText={(texto) => setName(texto)} 
        value={name} 
        placeholder="Nome personalizado" 
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#21243d',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 20,
  },
  urlInput: {
    height: 50,
    width: '80%',
    borderColor: '#21243d',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fafafa',
    marginBottom: 20,
    fontSize: 20,

  }
})