import React from 'react';
import {StyleSheet, Text, View, Image,ScrollView} from 'react-native';

const About = (props) => {
  return (
    <ScrollView style={{flex:1}}>

      <View  style={styles.container}>
              
        <Image source={require('../src/assets/icon.png')}
        style={{ width: 50, height: 50 }} />
        <Text> Deprem Monitörü v0.2</Text>
        <Text> Created by  &copy;2020</Text>
        
        <Text>Veriler Gerçek zamanlı olarak
        {'\n'}
        https://deprem.odabas.xyz/api/pure_api.php {'\n'}
        adresinden alınmaktadır.</Text>
        
        <Text>Bu versiyonda 3.5 şiddetinden büyük depremler belirginleştirildi.
        {'\n'} Depremin bilgisinin üzerine basılınca depremin koordinatları belirtildi.
        {'\n'}Bir sonraki versiyonda harita verilerinin eklenmesi planlanmaktadır.
        </Text>
        <Image source={require('../src/assets/app.jpeg')}
        style={{ width: 80, height: 150 }} />
        <Text style={{color:'#00766c',padding:40,fontWeight:'bold'}} onPress={() => props.navigation.navigate('Main')}>&lt;&lt;&lt; Depremler Sayfasına Dön</Text>
        
            
      
      </View>
   </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 5,
    padding: 5,
    borderRadius: 5,
    alignItems:'center',
    justifyContent:'flex-start'
  },
});