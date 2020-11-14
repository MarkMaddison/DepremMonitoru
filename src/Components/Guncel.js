import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Guncel = ({items}) => {
  return (
    <TouchableOpacity onPress={() => {
      alert('Enlem - Boylam : '+items.enlem+' '+' '+items.boylam);
    }}>
      <View style={{backgroundColor: items.siddet > 3.49 ? 'red' : '#64d8cb',flexDirection: 'row',
        flex: 3,
        borderRadius: 15,
        margin: 8,
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center',}}>
        <Text
          style={{fontSize: items.siddet > 3.49 ? 30 : 20,
            fontWeight: "bold",
            backgroundColor: items.siddet > 3.49 ? 'red' : 'white',
            borderRadius: 25,
            padding: 3,
            color: items.siddet > 3.49 ? 'yellow' : 'black',}}>
          {' '}
          {items.siddet}
          {' '}
        </Text>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 0,
            padding: 0,
            flex:1,
          }}>
          <Text style={{fontSize: 20,color: items.siddet > 3.49 ? 'yellow' : 'black'}}>{items.yer}</Text>
          <Text style={{color: 'black'}}>Tarih: {items.tarih}  Saat:{items.saat}</Text>
          <Text style={{fontSize: 12,color:'black'}}>Derinlik : {items.derinlik} km</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Guncel;

const styles = StyleSheet.create({
  // container: {
  //   flexDirection: 'row',
  //   flex: 3,
  //   borderRadius: 15,
  //   backgroundColor: '#64d8cb',
  //   margin: 8,
  //   padding: 5,
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  // },

  // magnitude: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   backgroundColor: 'white',
  //   borderRadius: 25,
  //   padding: 3,
  //   color: test,

  // }
});
