import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';  // Importando o ícone de Feather
import { useNavigation } from '@react-navigation/native';

export default function EditProfile() {
  const navigation = useNavigation();  // Hook para acessar a navegação

  return (
    <View style={styles.container}>
      {/* Ícone de Voltar */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>

      <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4333/4333609.png' }} style={styles.profileImage} />
      <Text style={styles.username}>@user1234</Text>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Nome</Text>
        <Text style={styles.value}>Fulano d’ Tal</Text>
        <Icon name="edit-3" size={18} color="#000" />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Bio</Text>
        <Text style={styles.value}>Bixo 029{"\n"}Eng. Comp{"\n"}Diretor de markerting</Text>
        <Icon name="edit-3" size={18} color="#000" />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <Text style={styles.link}>Alterar Senha</Text>
      <Text style={styles.link}>Excluir Conta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFF0E9',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 1,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,

  },
  username: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 20,
  },
  label: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    flex: 2,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#00CC66',
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  link: {
    color: '#007BFF',
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
});