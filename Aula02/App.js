import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [numeros, setNumeros] = useState([]);
  const [texto, setTexto] = useState("Aperte o botao para gerar os numeros");


  const MegaSena = () => {
    let count = 0;
    let array = [];
    
    while (count < 6) {
      let num = 1 + Math.trunc((Math.random() * 100) % 60);
      if (!array.includes(num) && num > 0 && num <= 60) {
        array.push(num);
        count++;
      }
    }

    array.sort((a,b)=>{return a-b});
    setNumeros(array);
    setTexto("Aqui estão seus numeros da Mega Sena")
  }


  return (
    <View style={styles.container}>
      <Text style = {{fontSize: 18}}>{texto}</Text>
      <View style = {styles.viewNumeros}>{numeros.map((num, pos) => {
          return <Text style = {styles.textoNumeros} key = {pos}>{num}</Text>
      })}</View>
      <Button title="Gerar Numeros"
        onPress={
          MegaSena
        } 
        
        color = "#000000"/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  viewNumeros:{
    flexDirection: 'row',
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 10,
  },

  textoNumeros:{
    paddingRight: 7,
    paddingStart: 7,
    backgroundColor: '#555',
    color: 'white',
    fontSize: 20,
  },
});
