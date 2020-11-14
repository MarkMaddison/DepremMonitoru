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
    
    return (
      <View>
        <Text style={styles.header}> En Son Depremler </Text>
        <Search
          placeholder="  🔎 Search a place..."
          onSearch={(value) => searchCity(value)}
        />
        
        <TouchableOpacity onPress={() =>
                  props.navigation.navigate('About')}>
          <View >
            <Text style={styles.about}>Uygulama Hakkında</Text>
          </View>
        
        </TouchableOpacity>
          
        
        <View style={{borderWidth: 0.5, borderColor: '#bdbdbd'}} />

          {isLoading ? (
            <ActivityIndicator
            style={{marginVertical: 200}}
            size="large"
            color="#80d6ff"
            />
            ) : (
              <FlatList
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
      backgroundColor: '#00766c',
      fontSize: 15,
      // fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
      borderRadius: 15,
      margin: 3,
      // padding: 3,
    },
  });