import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Searchs = (props) => {
  return (
    <View>
      <TextInput
        placeholder={props.placeholder}
        onChangeText={(value2) => props.onSearch(value2)}
      />
      
    </View>
  );
};

export default Searchs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    margin: 5,
    padding: 5,
    borderRadius: 5,
  },
});