import React from 'react';
import { ColorPropType, Dimensions, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { FlatList, ScrollView, TextInput, TouchableHighlight, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../src/consts/colors';
import categories from '../src/consts/categories';
import foods from '../src/consts/foods';
import DetailsScreen from './DetailsScreen';
// import TimedSlideshow from 'react-native-timed-slideshow';
import Market from './Market';
import Carousel from '../src/consts/Carousel';
import {dummyData} from '../src/consts/Data';
import { Ionicons, FontAwesome } from "@expo/vector-icons";
// import axios from 'axios';

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

// const axios = require('axios');

class HomeScreen extends React.Component {
  
  state ={
    data:[],
    dataCity:[],
    selectedCategoryIndex:0,
    selectCity:0,
  }

  fetchData = async()=>{
    const response = await fetch('http://192.168.1.68:4545/store');
    const users = await response.json();
    this.setState({data:users});
  }
  fetchData2 = async()=>{
    const response2 = await fetch('http://192.168.1.68:4545/city');
    const users2 = await response2.json();
    this.setState({dataCity:users2});
  }

  componentDidMount(){
    this.fetchData();
    this.fetchData2();
  }

  render(){
    const { navigation } = this.props;
    
  
    ListCategories = () => {
      // const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
      return (
        <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesListContainer}>
                
              {this.state.dataCity.map((city, index) => (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.8}
                  onPress={() => {this.setState({selectCity:city.ID,selectedCategoryIndex:index}); } }> 

                  <View
                    style={{
                      backgroundColor:
                        this.state.selectedCategoryIndex == index
                          ? COLORS.primary
                          : COLORS.secondary,
                      ...styles.categoryBtn,
                    }}>
                      
                    <View style={styles.categoryBtnImgCon}>
                      
                      <Image
                        source={{uri:city.img}} 
                        style={{height: 35, width: 35, resizeMode: 'cover',borderRadius : 40}}
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        marginLeft: 5,
                        color:
                          this.state.selectedCategoryIndex == index
                            ? COLORS.white
                            : COLORS.primary,
                      }}>
                      {city.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
        </View>
      );
    };

  Card = ({stores}) => {
    let cit = this.state.selectCity
    if(cit==0){ // all markets
      return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() =>  {
          {navigation.navigate('Market', stores)}
            // let id= stores.ID;
          // onPress={() =>  {
          //   //  axios.get('http://192.168.1.109/Project/markets.php')
          //   // axios.get('http://192.168.1.68/Project/markets.php')
          //    axios.get('https://facebook.github.io/react-native/movies.json')
          //      .then(function (response) {
          //       console.warn(response);
          //      // alert(JSON.stringify(response));
          //      })
          //      .catch(function (error) {
                
          //        alert(error);
          //      })
                         
          //  }}>            
        }}>
        
        <View style={styles.card}>
          <View style={{alignItems: 'center', top: -40}}>
            <Image source={{uri: stores.logo}} style={{height: 120, width: 120,borderRadius:80}} />
          </View>
          {/* //image: require('../assets/cse1.png') */}
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{stores.name}</Text>
            <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
              {stores.location}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {/* <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              {stores.price}
            </Text> */}
            <View style={styles.addToCartBtn}>
              {/* <Icon name="add" size={20} color={COLORS.white} /> */}
              <Text style={{color:'white',fontStyle:'italic',fontWeight: 'bold'}}>Shopping Now</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }else if(cit==stores.city_id){ // select market by city
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() =>  {
          {navigation.navigate('Market', stores)}
            // let id= stores.ID;
          // onPress={() =>  {
          //   //  axios.get('http://192.168.1.109/Project/markets.php')
          //   // axios.get('http://192.168.1.68/Project/markets.php')
          //    axios.get('https://facebook.github.io/react-native/movies.json')
          //      .then(function (response) {
          //       console.warn(response);
          //      // alert(JSON.stringify(response));
          //      })
          //      .catch(function (error) {
                
          //        alert(error);
          //      })
                         
          //  }}>            
        }}>
        
        <View style={styles.card}>
          <View style={{alignItems: 'center', top: -40}}>
            <Image source={{uri: stores.logo}} style={{height: 120, width: 120,borderRadius:80}} />
          </View>
          {/* //image: require('../assets/cse1.png') */}
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{stores.name}</Text>
            <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
              {stores.location}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {/* <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              {stores.price}
            </Text> */}
            <View style={styles.addToCartBtn}>
              {/* <Icon name="add" size={20} color={COLORS.white} /> */}
              <Text style={{color:'white',fontStyle:'italic',fontWeight: 'bold'}}>Shopping Now</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
    }else{
      return(
        <View></View>
        );
      }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.light,paddingTop:0.3}}>
      <ScrollView 
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 120,
            paddingHorizontal: 20,
          }}>
 
            <View style={{flex: 1,padding:5}}>
             {/* <Ionicons name="notifications"  color="white"  size={24} onPress={() => navigation.toggleDrawer()} />  */}
              <Text style={styles.headerTitle}>Explore the</Text>
              <Text style={styles.headerTitle}>beautiful places</Text>
              <View style={styles.inputContainer}>
                <Icon name="search" size={28} />
                <TextInput
                  placeholder="Search place"
                  style={{color: COLORS.grey}}
                />
              </View>
            </View>
        </View>
        
        <View style={{paddingTop:50}}>
            <Carousel data = {dummyData}/>
        </View>
        
        <ListCategories />

        <View>
          <Text style={{fontSize:19, paddingStart:16,fontWeight:'bold'}}>All Markets</Text>
        </View>
        
        <FlatList
          numColumns={2}
          keyExtractor={(item,index)=> index.toString()}
          data={this.state.data}
          renderItem={({item}) => <Card stores={item} />}
          
        />

      </ScrollView>
    </SafeAreaView>
    
  );
}};


const styles = StyleSheet.create({
  // header: {
  //   marginTop: 20,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   paddingHorizontal: 20,
  // },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
  },
  inputContainer: {
    height:60,
    width:'100%',
    backgroundColor:COLORS.white,
    borderRadius:10,
    position:'absolute',
    top:145,
    left:20,
    flexDirection:'row',
    paddingHorizontal:40,
    alignItems:'center',
    // flex: 1,
    // height: 50,
    // borderRadius: 10,
    // flexDirection: 'row',
    // backgroundColor: COLORS.light,
    // alignItems: 'center',
    // paddingHorizontal: 20,
    
  },
  sortBtn: {
    left:10,
    top:-65,
    width: 50,
    height: 50,
    //marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
   // justifyContent: 'center',
    //alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  // categoryBtnImgCon: {
  //   height: 35,
  //   width: 35,
  //   backgroundColor: COLORS.white,
  //   borderRadius: 30,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 120,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 23,
  },
  inputContainer: {
    height: 60,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: 'absolute',
    top: 90,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
  },
});

export default HomeScreen;
