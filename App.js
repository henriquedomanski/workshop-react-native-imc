import React, { useState}  from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'


export default function App(){

  const [peso, setPeso] = useState ('');
  const [altura, setAltura] = useState ('');

  function handleSubmit (){
    const alt = altura / 100; // ex: se digitar 180, ele converte para 1.80
    const imc =  peso / (alt * alt);

    if (imc < 18.6) {
      alert ('Voce esta abaixo do peso ' + imc.toFixed(2));//teste
    } else if (imc >= 18.6 && imc < 24.9) {
      alert ('Peso ideal ' + imc.toFixed(2));

    } else if (imc >= 24.9 && imc < 34.9){

      alert ('levemente acima do peso ' + imc.toFixed(2))
    }

    else if (imc > 34.9){

      alert ('Muito acima do peso, seu IMC é de: ' + imc.toFixed(2))
    }

  };
//teste

  return (
    <View style={styles.container}>  
      <Text style={styles.title}>Calcule seu IMC</Text>

      <TextInput 
      style={styles.input} 
      value={peso}
      onChangeText={ (peso) => setPeso(peso)}
      placeholder="Peso (kg)"
      placeholderTextColor= '#686868'
      keyboardType='numeric'
      clearButtonMode= 'always'
      />
      

     


      <TextInput 
      style={styles.input} 
      value={altura}
      onChangeText={ (altura) => setAltura(altura)}
      placeholder="Altura (cm)"
      placeholderTextColor= '#686868'
      keyboardType='numeric'
      clearButtonMode='always'
      />
      

      <TouchableOpacity style={styles.button}
      onPress={handleSubmit}
    
      
      >


        <Text style={styles.buttonText}>Calcular</Text>


      </TouchableOpacity>

    </View>
  );

}

const styles = StyleSheet.create ({
  container:{
    flex:1,
  
  },

  title: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30

  },

  input: {
    backgroundColor: '#121212',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#FFF',
    fontSize: 23,


  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41Aef4',
    padding: 10,

  },

  buttonText: {
    color: '#FFF',
    fontSize: 25,
    

  }


 
  
})
