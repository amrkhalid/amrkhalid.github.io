
//import React , { useState, useEffect }from 'react'; 
import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View,StatusBar,TextInput ,Image,Dimensions,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {TouchableOpacity,ScrollView} from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';

import Map from './screens/Map';
import Profile from './screens/Profile';
import { Header } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Cart from './screens/Cart';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";


import Notifications from "./screens/Notifications";
import StartScreen from "./screens/StartScreen";
import LastScreen from "./screens/LastScreen";
import DetailsScreen from "./screens/DetailsScreen";
import Market from "./screens/Market";
import {Picker} from '@react-native-picker/picker';
import COLORS from './src/consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import categories from './src/consts/categories';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';


const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const { width } = Dimensions.get("screen");

Pic =()=>{
   const [selectedCity, setSelectedCity] = useState("Select City"); 
  return(
      <Picker
          selectedValue={selectedCity}
          style={{height:30,width:140,color:'white'}}
          onValueChange={(itemValue,itemIndex)=>
          setSelectedCity(itemValue)}
      >
         <Picker.Item
              label="Select City"
              value="Select City"
              // style={{fontWeight:"bold"}}
              
          />
          <Picker.Item
              label="Tulkarm"
              value="Tulkarm"
              // style={{fontWeight:"bold"}}
          />
          <Picker.Item
              label="Jinin"
              value="Jinin"
              // style={{fontWeight:"bold"}}
          />
          <Picker.Item
            label="Nablus"
            value="Nablus"
            // style={{fontWeight:"bold"}}
          />
        </Picker> 

  );};
  

MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerStyle={{
        backgroundColor:COLORS.secondary,
        width: width * 0.8
      }}
      // drawerContentOptions={{
      //   activeTintcolor: 'white',
      //   inactiveTintColor: 'white',
      //   activeBackgroundColor: "transparent",
      //   itemStyle: {
      //     width: width * 0.75,
      //     backgroundColor: "transparent",
      //     paddingVertical: 16,
      //     paddingHorizonal: 12,
      //     justifyContent: "center",
      //     alignContent: "center",
      //     alignItems: "center",
      //     overflow: "hidden"
      //   },
      //   labelStyle: {
      //     fontSize: 18,
      //     marginLeft: 12,
      //     fontWeight: "normal"
      //   }
      // }}
    >
      <Drawer.Screen
        name="Home"
        component={StackNavigator}
        options={{
          drawerLabel: "Home",
          drawerIcon: () => <Ionicons name="md-home" size={26} color="blue" />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={LastScreen}
        options={{
          drawerIcon: () => <Ionicons name="home" size={26} color="#8CBBF1" />,
        }}
      /> 
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{
          drawerIcon: () => <Ionicons name="home" size={26} color="#8CBBF1" />,
        }}
      />
         <Drawer.Screen
        name="OnBoardScreen" component={OnBoardScreen}
        options={{
          drawerIcon: () => <Ionicons name="home" size={26} color="#8CBBF1" />,
        }}
      />
    </Drawer.Navigator>
  );
}
StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={({ navigation }) => ({
        headerTitle:false,
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor:'#d60d14'
        },
        headerLeft: () =>
          <View style={{ paddingLeft: 10 }}>
            <Ionicons
              name="md-menu"
              color="white"
              size={28}
              onPress={() => navigation.toggleDrawer()}
            />
          </View>,
        headerRight: () =>
          <View >
            {/* <Ionicons
              name="notifications"
              color="white"
              size={20}
              onPress={() => navigation.toggleDrawer()}
            /> */}
            <Pic/>
          </View>
      })
      }
    >
      <Stack.Screen name="DetailsScreen" component={DetailsScreen}
        options={{
          headerShown: true,
        }}/>
      <Stack.Screen name="Market" component={Market}
        options={{
          headerShown: true,
        }}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen}
        options={{
          headerShown: true,
        }}/>
      <Stack.Screen name="OnBoardScreen" component={OnBoardScreen}
        options={{
          headerShown: true,
        }}/>
      {/* <Stack.Screen
        name="Start"
        component={StartScreen}
        options={({ navigation }) => ({
          title: 'Start Here',
          headerRight: () =>
            <View style={{ paddingRight: 10 }}>
              <FontAwesome name="edit" size={32} color="white" />
            </View>,
          headerLeft: () => <View style={{ paddingLeft: 10 }}>
            <Ionicons
              name="home"
              size={32}
              color="white"
              onPress={() => navigation.goBack()}
            />
            
          </View>
        })
        }
      /> */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // title: 'Welcome',
          
          headerShown: true,
        }}
      />
      <Stack.Screen name="LastScreen" component={LastScreen} />
    </Stack.Navigator>
  )
}


class Index extends React.Component {
    
  state ={
    cityName:[]
  }
  fetchData = async()=>{
    const response = await fetch('http://10.0.0.28:4545/city');
    const users = await response.json();
    this.setState({cityName:users});
  }
  componentDidMount(){
    this.fetchData();
  }

  render(){
    const {navigation} = this.props;
  return (
    <Tab.Navigator 
        initialRouteName="Home"
        activeColor="#f0edf6"
        barStyle={{ backgroundColor: '#d60d14' }}
    >
      <Tab.Screen name="Home" component={MyDrawer} options={{
                 tabBarIcon: ({ color }) => (
                  <AntDesign name="home" color={color} size={24} />
        ),
   }}
       />
      <Tab.Screen name="Cart" component={Cart} options={{
                 tabBarIcon: ({ color }) => (
                  <AntDesign name="shoppingcart" color={color} size={24} />
        ),
   }} />
      <Tab.Screen name="Map" component={Map} options={{
                 tabBarIcon: ({ color }) => (
                  <Feather name="map-pin" color={color} size={24} />
        ),
   }} />

    </Tab.Navigator>
  );}
}

export default ()=> {
  return(
    <NavigationContainer >
      <StatusBar hidden/>
        <Index/>
    </NavigationContainer >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
