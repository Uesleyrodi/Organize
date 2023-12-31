import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation} from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import Register from '../Register';

export default function SignIn() {
  const navigation = useNavigation();

 return (
   <View style={style.container}>
    <Animatable.View animation={'fadeInLeft'} delay={500} style={style.containerHeader}>
      <Text style={style.message}>Bem-vindo(a)</Text>
    </Animatable.View>

    <Animatable.View animation={'fadeInUp'} style={style.containerForm}>
      <Text style={style.title}>Email</Text>
      <TextInput placeholder='Digite seu e-mail' style={style.input}></TextInput>

      <Text style={style.title}>Senha</Text>
      <TextInput placeholder='Digite sua senha' style={style.input}></TextInput>

      <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.buttonRegister} onPress={() => navigation.navigate((Register))}>
        <Text style={style.registerText}>Não possui uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </Animatable.View>
   </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#38a69d'
  },

  containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },

  message:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF'
  },

  containerForm: {
    flex:1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },

  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#38a69d',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },

  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center'
  },

  registerText: {
    color: '#a1a1a1'
  }
})
