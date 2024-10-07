import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const UserProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.username}>@user1234</Text>
      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4333/4333609.png' }} 
        style={styles.profileImage} 
      />
      <Text style={styles.name}>Fulano d’ Tal</Text>
      <Text style={styles.bio}>Bixo 029</Text>
      <Text style={styles.bio}>Eng. Comp</Text>
      <Text style={styles.bio}>Diretor de marketing</Text>
      <TouchableOpacity 
        style={styles.editProfileButton} 
        onPress={() => navigation.navigate('EditProfile')}
      >
        <Text style={styles.editProfileText}>Editar Perfil</Text>
      </TouchableOpacity>

      <Image 
        source={{ uri: 'https://image.shutterstock.com/image-photo/portrait-smiling-young-college-student-260nw-1192615495.jpg' }} 
        style={styles.mainImage} 
      />
      
      {/* Rodapé com Navegação */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>Explorar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.footerButton} 
          onPress={() => navigation.navigate('Notifications')}
        >
          <Text style={styles.footerText}>Notificações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFF0E9',
    alignItems: 'center',
    paddingTop: 50,
  },
  username: {
    fontSize: 20,
    marginVertical: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 40,
    marginTop:10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
  },
  editProfileButton: {
    marginVertical: 20,
    backgroundColor: '#00CC66',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editProfileText: {
    color: '#fff',
    fontSize: 16,
  },
  mainImage: {
    width: 300,
    height: 300,
    marginVertical: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
  },
});

export default UserProfile;
