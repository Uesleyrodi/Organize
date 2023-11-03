import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Register() {

 return (
   <View style={style.container}>
    <Animatable.View animation={'fadeInLeft'} delay={500} style={style.containerHeader}>
      <Text style={style.message}>Cadastre-se</Text>
    </Animatable.View>

    <Animatable.View animation={'fadeInUp'} style={style.containerForm}>
      <Text style={style.title}>Nome</Text>
      <TextInput placeholder='Digite seu Nome' style={style.input}></TextInput>

      <Text style={style.title}>Sobrenome</Text>
      <TextInput placeholder='Digite seu sobrenome' style={style.input}></TextInput>

      <Text style={style.title}>E-mail</Text>
      <TextInput placeholder='Digite seu e-mail' style={style.input}></TextInput>

      <Text style={style.title}>Senha</Text>
      <TextInput placeholder='Digite sua senha' style={style.input}></TextInput>

      <Text style={style.title}>Confirme sua Senha</Text>
      <TextInput placeholder='Digite confirmação de senha' style={style.input}></TextInput>

      <SafeAreaView>

      </SafeAreaView>

      <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}>Registrar</Text>
      </TouchableOpacity>

    </Animatable.View>
   </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#38a69d'
  },
  containerHeader: {
    paddingStart: '2%',
    paddingTop: '2%',
    paddingBottom: '2%',
    height: '2%',
    height: 65,
  },
  message:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF'
  },
  containerForm:{
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    paddingTop: '2%'
  },
  title: {
    fontSize: 18,
    marginTop: 8,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 14,
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
  }
})
