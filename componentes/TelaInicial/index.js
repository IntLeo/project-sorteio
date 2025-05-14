import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TelaInicial = () => {
  // Criando o estado para armazenar o número sorteado
  const [numeroSorteado, setNumeroSorteado] = useState(null);

  // Função para sortear um número entre 1 e 100
  const sortearNumero = () => {
    const novoNumero = Math.floor(Math.random() * 100) + 1;
    setNumeroSorteado(novoNumero);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicativo de Sorteio</Text>
      
      {numeroSorteado && (
        <Text style={styles.numero}>Número Sorteado: {numeroSorteado}</Text>
      )}
      
      <Button
        title="Sortear"
        onPress={sortearNumero}
        color="#841584"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  numero: {
    fontSize: 20,
    marginVertical: 30,
    color: '#841584',
    fontWeight: 'bold',
  },
});

export default TelaInicial;