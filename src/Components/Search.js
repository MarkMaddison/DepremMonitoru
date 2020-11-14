import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Search = (props) => {
  return (
    <View>
      <TextInput
        placeholder={props.placeholder}
        onChangeText={(value) => props.onSearch(value)}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    margin: 5,
    padding: 5,
    borderRadius: 5,
  },
});