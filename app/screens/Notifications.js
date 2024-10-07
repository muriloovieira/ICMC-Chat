import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const Notifications = () => {
  const navigation = useNavigation();  // Hook para acessar a navegação

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Notificações</Text>
        <Text style={styles.sectionTitle}>Hoje</Text>
        <View style={styles.notificationItem}>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4333/4333609.png' }} 
            style={styles.profileImage} 
          />
          <Text style={styles.notificationText}><Text style={styles.boldText}>rob.erto</Text> curtiu sua foto</Text>
        </View>
        <View style={styles.notificationItem}>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4333/4333609.png' }} 
            style={styles.profileImage} 
          />
          <Text style={styles.notificationText}><Text style={styles.boldText}>rodol.fo</Text> comentou na sua foto: “Tá bem demais paizão”</Text>
        </View>
        <Text style={styles.sectionTitle}>Ontem</Text>
        <View style={styles.notificationItem}>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4333/4333609.png' }} 
            style={styles.profileImage} 
          />
          <Text style={styles.notificationText}><Text style={styles.boldText}>rob.erto</Text> começou a te seguir</Text>
        </View>
      </ScrollView>

      {/* Rodapé com Navegação */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>Feed</Text>
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
        <TouchableOpacity 
          style={styles.footerButton}
          onPress={() => navigation.navigate('UserProfile')}  // Navegar para a tela de perfil
        >
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 60,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginLeft: 20,
    marginRight: 20,  // Adicionando margem direita para garantir espaço
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  notificationText: {
    fontSize: 16,
    flexShrink: 1,  // Permite que o texto se ajuste ao espaço disponível
    flexWrap: 'wrap',  // Faz com que o texto quebre em múltiplas linhas se necessário
  },
  boldText: {
    fontWeight: 'bold',
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

export default Notifications;
