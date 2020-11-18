import React from 'react';
import {StyleSheet, Text, View, Image,ScrollView} from 'react-native';

const About = (props) => {
  return (
    <ScrollView>

        <View  style={styles.container}>
        <Image source={require('../src/assets/icon.png')}
        style={{ width: 50, height: 50 }} />
        <Text> Deprem Monitörü v0.2</Text>
        <Text> Created by  &copy;2020{'\n'}</Text>
        
        
        <View>
          <Text>Veriler Gerçek zamanlı olarak
          {'\n'}https://deprem.odabas.xyz/api/pure_api.php {'\n'}
          adresinden alınmaktadır.{'\n'}{'\n'}
          Bu versiyonda :{'\n'}
          1.) 3.5 şiddetinden büyük depremler belirginleştirildi.{'\n'}
          {'\n'} 2.) Depremin bilgisinin üzerine basılınca depremin koordinatlarına ulaşılması sağlandı.{'\n'}
          {'\n'}3.) Bir sonraki versiyonda harita verilerinin eklenmesi planlandı.
          </Text>
        </View>  
        <Image source={require('../src/assets/app.jpeg')}
        style={{ width: 80, height: 150 }} />
        
        <View style={{flex:1,flexDirection:'row',flexWrap:'nowrap',justifyContent:'flex-start'}}>
          <Text style={styles.text} onPress={() => props.navigation.navigate('Main')}>&lt;&lt;&lt; Depremler Sayfasına Dön</Text>
          <Text style={styles.text} onPress={() => props.navigation.navigate('Main')}>Depremler Sayfasına Dön &gt;&gt;&gt; </Text>
        </View>
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
    justifyContent:'flex-start',
    alignItems:'center'
  },
  text: {
    margin: 10,
    // padding: 10,
    alignItems:'center',
    justifyContent:'flex-start',
    alignItems:'center'
  },
});