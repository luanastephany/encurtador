import React, { useState } from 'react';
import { Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [url, setUrl] = useState('')
  const [name, setName] = useState('')
  const [urlFinal, setUrlFinal] = useState('')

  const short = async () => {
    Keyboard.dismiss()
    setUrlFinal('Carregando...')
    if (url.includes('https://') || url.includes('http://')) {
       fetch(`https://cutt.ly/api/api.php?key=56e74d44b6a04ec27535c31e8a80b0ad2e729&short=${url}&name=${name}`)
      .then(async response => {
        const data = await response.json();
        if (data.url.status === 3) {
          alert('Esse nome já está em uso')
          setUrlFinal('')
          return
        }
        if (data.url.status === 2) {
          alert('Url inválida')
          setUrlFinal('')
          return
        }        
        setUrlFinal(data.url.shortLink)
        
      })
      return;
    }
    alert('Url inválida')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Short
          <Text style={{color: '#1076f7'}}>url</Text>
        </Text>

        <TextInput 
          style={styles.urlInput} 
          onChangeText={(texto) => setUrl(texto)} 
          value={url} 
          placeholder="Digite a url" 
          autoCapitalize='none'
        />
        <TextInput 
          style={styles.urlInput} 
          onChangeText={(texto) => setName(texto)} 
          value={name} 
          placeholder="Nome personalizado" 
          autoCapitalize='none'
        />

        <TouchableOpacity onPress={() => short()} style={styles.shortBtn}>
          <Text style={{color: '#fff'}}>Encurtar</Text>
        </TouchableOpacity>

        <Text style={styles.finalUrl}>{urlFinal}</Text>
        
        

      </View>
    </TouchableWithoutFeedback>
  );
}


