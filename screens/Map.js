import React from 'react'
import { StyleSheet, Text, View, Dimensions,Image} from 'react-native';
import MapView from 'react-native-maps';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { render } from 'react-dom';
// const  height = Dimensions.get('window').height;


class Map extends React.Component {
  state ={
    data:[]
  }

  fetchData = async()=>{
    const response = await fetch('http://192.168.1.68:4545/store');
    const users = await response.json();
    this.setState({data:users});
    //console.log(users[0].ID);
  }

  componentDidMount(){
    this.fetchData();
  }

  render(){
    const { navigation } = this.props;

    return(
      <View style={styles.container}>
        <MapView 
          style={styles.map}
          loadingEnabled={true}
          region={{ // عى اساس طولكرم فقط 
            latitude:32.3210583330876,
            longitude:35.024251029315,
            latitudeDelta:0.015,
            longitudeDelta:0.0121
          }}
        >
          
          {this.state.data.map(marker=>(
              <MapView.Marker
                  key={marker.ID}
                  coordinate={{
                    latitude: parseFloat(marker.lat_map),
                    longitude: parseFloat(marker.long_map),
                  }}
                  title={marker.name}
                  description={marker.location}
              > 
                <Image source = {require('../assets/shop.png')} style={{height:32,width:32}}/> 
              </MapView.Marker>
          ))}       
        </MapView>
      </View> //{/* and we can use <Callout>  للفاقعة ةوالايقونة*/ }
    )
}}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
     // height,
    },
  });

export default Map;