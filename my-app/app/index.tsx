import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Configurações do Firebase (substitua pelos seus valores)
const firebaseConfig = {
  apiKey: "AIzaSyAeQWY-2gujdnTUS7U4QF3LzEqeZY_hdIA",
  authDomain: "meuprimeirofirebase-f5b39.firebaseapp.com",
  projectId: "meuprimeirofirebase-f5b39",
  storageBucket: "meuprimeirofirebase-f5b39.appspot.com",
  messagingSenderId: "42127092677",
  appId: "1:42127092677:web:74f8b0583d38afa07039ac",
  measurementId: "G-KYDK4T0SSM"
};

// Inicialize o Firebase antes de qualquer uso
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  const sendData = async () => {
    const nomesCollection = firebase.firestore().collection('Nomes');
    try {
      await nomesCollection.add({
        Nome: nome,
        Sobrenome: sobrenome
      });
      Alert.alert('Sucesso', 'Dados cadastrados com sucesso!');
      setNome('');
      setSobrenome('');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar os dados.');
    }
  };
  
  return (
    <View>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Sobrenome"        
        value={sobrenome}
        onChangeText={setSobrenome}
      />
      <Button title="Cadastrar" onPress={sendData} />
    </View>
  );
};

export default App;