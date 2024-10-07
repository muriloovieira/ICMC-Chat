import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Hook para navegação  
import logoDay from "../assets/images/adaptive-icon.png";

export default function Index() {
    const navigation = useNavigation();

    return (
        <View style={styles.loginPage}>
            <View style={styles.header}>
                Seja bem-vindo(a) ao ICMC Chat
            </View>
            <View style={styles.body}>
                <View style={styles.logo}>
                    <Image 
                        source={logoDay.png} 
                        style={styles.img}
                    /> 
                    <View>Acesse sua conta:</View>
                </View>
                
                    <View style={styles.formEntry}>
                        <Text style={styles.inputName}>Email:</Text>
                        <TextInput style={styles.inputContent} value={text}/>
                    </View>
                    <View style={styles.formEntry}>
                        <Text style={styles.inputName}>Senha:</Text>
                        <TextInput style={styles.inputContent} value={password}/>
                    </View>
             
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Text>Cadastre-se!</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <View>Não tem uma conta?</View>
                <TouchableOpacity 
                    style={styles.signupButton}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text>Cadastre-se!</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
};

const styles = StyleSheet.create({
    img: {
        height: 15,
        width: auto,
        marginBottom: 16,
    },
    
    loginPage: {
        display: flex,
        flexDirection: column,
    },
    
    header, body, footer: {
        backgroundColor: '#daf7e9',
    },
    
    header, footer: {
        padding: 10,
        textAlign: center, 
    },
    
    header: {
        fontSize:1.5, /*adequar ao resto do projeto*/
    },
    
    body: {
        marginVertical: 2,
        marginHorizontal: 0,
        paddingTop: 8,
        flex: auto,
    
        display:flex,
        flexDirection: column,
        justifyContent: flex-start,
    },
    
    footer: {
        paddingVertical: 10,
        paddingHorizontal: 5,

        display:flex,
        flexDirection: column,
    },
    
    logo: {
        alignSelf: center,
        textAlign: center,
    },
    
    formEntry: {
        marginVertical: 0,
        marginHorizontal:10,
    
        display: flex,
        flexDirection: column,
    },
    
    inputName: {
        marginBottom: 1,
    },
    
    inputContent: {
        borderRadius: 0.8,
        height: 28,
        backgroundColor: rgba(47, 198, 180, 0.21),
        border: white,
        padding: 3,
    },
    
    loginButton: {
        fontSize: 1.6,
        backgroundColor: rgb(13, 240, 133, 0.7),
        paddingVertical: 10,
        paddingHorizontal: 30,
        border: none,
        borderRadius: 1,
    
        justifySelf: center,
        alignSelf: center,
    
        maxWidth: 30,
        marginTop: 16,
    },
    
    signupButton: {
        fontSize: 1.6,
        backgroundColor: rgb(13, 240, 133, 0.7),
        paddingVertical: 10,
        paddingHorizontal: 30,
        border: none,
        borderRadius: 1,
    
        justifySelf: center,
        alignSelf: center,
    
        flex: auto,
        minWidth: 100,
        marginTop: 16,
        flex: auto,
    },
});
