import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const newPost = () => {

  return (
    <View style={styles.newPostPage}>
        <View style={styles.header}>
            <Image style={styles.img} source={arrow-left.png}/>
            <View style={styles.headerText}>Criar postagem</View>
            <TouchableOpacity style={styles.postButton}>Post</TouchableOpacity>
        </View>
        <View style={styles.body}>
            
                <View style={styles.formEntry}>
                    <Text style={styles.firstInput}>Descrição:</Text>
                    <TextInput style={styles.inputContentDescription} value={text}/>
                </View>
                <View style={styles.formEntry}>
                    <Text style={styles.inputName}>Imagens:</Text>
                    <TextInput style={styles.inputContentImage} value={text}/> 
                </View>
            
            <TouchableOpacity style={styles.submitImageButton}>
                Adicionar imagem
            </TouchableOpacity>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    img: {
        width: 5,
    },
    
    button: {
        fontSize: 1.6,
        backgroundColor: rgb(13, 240, 133, 0.7),
        paddingVertical: 10,
        paddingHorizontal: 30,
        border: none,
        bordeRadius: 1,
    
        justifySelf: center,
        alignSelf: center,
    },
    
    newPostPage: {
        display: flex,
        flexDirection: column,
    },
    
    body: {
        backgroundColor: '#daf7e9',
        flexGrow: 1,
    
        display:flex,
        flexDirection: column,
        justifyContent: flex-start,
    },
    
    formEntry: {
        marginVertical: 0,
        marginHorizontal:10,
    
        display: flex, 
        flexDirection: column,
    },
    
    inputName: {
        marginBottom: 2,
    },
    
    inputContentDescription, inputContentImage: {
        borderRadius: 0.8,
        backgroundColor: rgba(47, 198, 180, 0.21),
        border: white,
        padding: 3,
    },
    
    inputContentDescription: {
        height: 10,
    },
    
    inputContentImage: {
        height: 52,
    },
    
    submitImageButton: {
        minWidth: 90,
        marginTop: 16,
    },
    
    header: {
        display: flex,
        padding: 10,
        alignItems: center,
    },
    
    headerText: {
        flex: 1,
        textAlign: center,
        fontSize: 2.5,
    },
    
    postButton: {
        fontSize: 1,
        backgroundColor: rgb(13, 240, 133, 0.7),
        paddingVertical: 5,
        paddingHorizontal: 10,
        border: none,
        borderRadius: 1,
    
        justifySelf: center,
        alignSelf: center,
    },
    
    firstInput: {
        marginBottom: 2,
        marginTop:10,
    },
});

export default newPost;