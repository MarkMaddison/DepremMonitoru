import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import axios from 'axios';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Button
} from 'react-native';
import Guncel from './Components/Guncel';
import Search from './Components/Search';
import Searchs from './Components/Searchs';


const Main = (props) => {
    const [listDeprem, setListDeprem] = React.useState([]);
    const [isLoading, setLoading] = React.useState(true);
    const fetchData = async () => {
      setLoading(true);
      const {data} = await axios.get(
        'https://deprem.odabas.xyz/api/pure_api.php',
      );
      setListDeprem(data);
      originalList = [...data];
      setLoading(false);
    };
  
    useEffect(() => {
      fetchData();
    }, []);
    const renderItemList = ({item}) => {
      return <Guncel items={item} />;
    };
  
    function searchCity(search) {
      const filteredCities = originalList.filter((x) => {
        const text = search.toUpperCase();
        const cityName = x.yer.toUpperCase();
  
        return cityName.indexOf(text) > -1;
      });
  
      setListDeprem(filteredCities);
    }
    function searchCitys(Searchs) {
      const filteredCities = originalList.filter((x) => {
        const text = Searchs;
        const cityName = x.siddet;
  
        return cityName.indexOf(text) > -1;
      });
  
      setListDeprem(filteredCities);
    }
    
    return (
          <View style={{flex:1,backgroundColor:'white'}}>
              <Text style={styles.header}> En Son Depremler </Text>
              <View style={{flex:0.1,flexDirection:'row',justifyContent:'space-between'}}>

              <Search  placeholder="  🔎 Yere göre ara"
                onSearch={(value) => searchCity(value)}/>
              <Searchs placeholder="🔎 Şiddete göre Ara"
                onSearch={(value2) => searchCitys(value2)}/>
              </View>
              
              <View style={{flex:0.05,backgroundColor: '#00766c',flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={() =>
                          props.navigation.navigate('Map')}>
                  <Text style={styles.about}>Harita Görünümü</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
                          props.navigation.navigate('About')}>
                  <Text style={styles.about}>Uygulama Hakkında</Text>
                </TouchableOpacity>
              </View>


        
        <View style={{borderWidth: 0.5, borderColor: '#bdbdbd'}} />

          {isLoading ? (
            <ActivityIndicator
            style={{marginVertical: 200}}
            size="large"
            color="#80d6ff"
            />
            ) : (
              <FlatList style={{flex:1}}
              data={listDeprem}
              renderItem={renderItemList}
              ItemSeparatorComponent={() => (
                             
                  <View style={{borderWidth: 0.3, borderColor: '#000000'}} />
                
                )}
                keyExtractor={(_, index) => index.toString()}
                />
                )}
          
      </View>
    );
  };
  
  export default Main;
  
  const styles = StyleSheet.create({
    header: {
      backgroundColor: '#00766c',
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
      borderRadius: 15,
      margin: 3,
      padding: 3,
    },
    about: {
      // backgroundColor: '#00766c',
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
      // borderRadius: 15,
      margin: 3,
      padding: 3,
    },
    container: {
      backgroundColor: 'white',
      margin: 5,
      padding: 5,
      alignItems:'center',
      justifyContent:'flex-start',
      alignItems:'center',
      flex:1
    },
  });