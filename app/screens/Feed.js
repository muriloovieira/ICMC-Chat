// src/components/Post.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: post.imageUrl }} style={styles.image} />
      <Text style={styles.caption}>{post.caption}</Text>
      <Text style={styles.likes}>{post.likes} curtidas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2, // Para Android
  },
  image: {
    width: '100%',
    height: 300,
  },
  caption: {
    padding: 10,
    fontSize: 16,
  },
  likes: {
    paddingHorizontal: 10,
    color: 'gray',
  },
});

export default Post;