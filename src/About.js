import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const About = (props) => {
  return (
    <View style={styles.container}>
      <Text> Created by Tayfun Bektaş &copy;2020</Text>
    
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    margin: 5,
    padding: 5,
    borderRadius: 5,
    flex:1,
  },
});