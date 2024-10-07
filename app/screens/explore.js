import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet} from 'react-native';

const Explore = () => {
    const navigation = useNavigation();

    return (
    <View style={styles.explorePage}>
        <View style={styles.body}>
            
                <View style={styles.formEntry}>
                    <Image style={styles.img} source={search.png}/>
                    <TextInput style={styles.inputContent} value={text}/>
                </View>
            
        </View>

        {/* Rodapé com Navegação */}
        <View style={styles.footer}>
            <TouchableOpacity 
            style={styles.footerButton} 
            onPress={() => navigation.navigate('Feed')}
            >
            <Text style={styles.footerText}>Feed</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.footerButton} 
            onPress={() => navigation.navigate('Explore')}
            >
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
            onPress={() => navigation.navigate('UserProfile')} 
            >
            <Text style={styles.footerText}>Perfil</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    img: {
        width: 6,
    
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    explorePage: {
    },
    
    body: {
        backgroundColor: '#daf7e9',
        paddingTop: 3,
        flexGrow: 1,
    },
    
    formEntry: {
        paddingHorizontal:4,
        gap: 1,
    },
    
    inputContent: {
        borderRadius: 0.8,
        height: 28,
        backgroundColor: 'rgba(47, 198, 180, 0.21)',
        border: 'white',
        padding: 3,
        
        flexGrow: 1,
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

export default Explore;