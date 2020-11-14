import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

const About = (props) => {
  return (
    <View style={styles.container}>
      <Text> Created by  &copy;2020</Text>
      <TouchableOpacity style={{margin:10,padding:10, borderRadius:25}}>
        <Button 
        title="Depremler Sayfasına Dön"
        noBorder
        onPress={() => props.navigation.navigate('Main')}
      />
      </TouchableOpacity> 
        
      
    
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