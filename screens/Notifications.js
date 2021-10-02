import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get('screen');
import faker from 'faker';
import COLORS from '../src/consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DATA = [{
    key: '1',
    image: 'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    name: 'amr nassar',
    jobTitle: 'aaaaaaaaaaaa',
    email:'amr@hotmail',
  },
  {
    key: '2',
    image: 'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    name: 'amr nassar',
    jobTitle: 'aaaaaaaaaaaa',
    email:'amr@hotmail',
  },
  {
    key: '3',
    image: 'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    name: 'amr nassar',
    jobTitle: 'aaaaaaaaaaaa',
    email:'amr@hotmail',
  },
  {
    key: '4',
    image: 'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    name: 'amr nassar',
    jobTitle: 'aaaaaaaaaaaa',
    email:'amr@hotmail',
  },
  {
    key: '5',
    image: 'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    name: 'amr nassar',
    jobTitle: 'aaaaaaaaaaaa',
    email:'amr@hotmail',
  },
  {
    key: '6',
    image: 'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    name: 'amr nassar',
    jobTitle: 'aaaaaaaaaaaa',
    email:'amr@hotmail',
  },
  {
    key: '7',
    image: 'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    name: 'amr nassar',
    jobTitle: 'aaaaaaaaaaaa',
    email:'amr@hotmail',
  },
  {
    key: '8',
    image: 'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    name: 'amr nassar',
    jobTitle: 'aaaaaaaaaaaa',
    email:'amr@hotmail',
  },
  {
    key: '9',
    image: 'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    name: 'amr nassar',
    jobTitle: 'aaaaaaaaaaaa',
    email:'amr@hotmail',
  },
  {
    key: '10',
    image: 'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    name: 'amr nassar',
    jobTitle: 'aaaaaaaaaaaa',
    email:'amr@hotmail',
  },
  {
    key: '11',
    image: 'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    name: 'amr nassar',
    jobTitle: 'aaaaaaaaaaaa',
    email:'amr@hotmail',
  },
  {
    key: '12',
    image: 'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    name: 'amr nassar',
    jobTitle: 'aaaaaaaaaaaa',
    email:'amr@hotmail',
  },
  {
    key: '13',
    image: 'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    name: 'amr nassar',
    jobTitle: 'aaaaaaaaaaaa',
    email:'amr@hotmail',
  }]

const Notifications=({ navigation })=>{

const BG_IMG = 'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';

const SPACING = 15;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;


  
        const scrollY = React.useRef(new Animated.Value(0)).current;
        return <View style={{flex: 1, backgroundColor: COLORS.secondary}}>
        {/* <Image
            source={{uri:BG_IMG}}
            style={StyleSheet.absoluteFillObject}
            blurRadius={80}
        /> */}
         <View style={style.header}>
                <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Notifications</Text>
            </View>
        <Animated.FlatList
            data={DATA}
            onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true}
            )}
            keyExtractor={item =>item.key}
            contentContainerStyle={{
            padding: SPACING,
            paddingTop: StatusBar.currentHeight || 42
            }}
            
            renderItem={({item,index}) => {

            const inputRange = [
                -1,
                0,
                ITEM_SIZE * index,
                ITEM_SIZE * (index + 2)
            ]
            const opacityInputRange = [
                -1,
                0,
                ITEM_SIZE * index,
                ITEM_SIZE * (index + 0.5)
            ]

            const scale = scrollY.interpolate({
                inputRange,
                outputRange:[1,1,1,0]
            })
            const opacity = scrollY.interpolate({
                inputRange:opacityInputRange,
                outputRange:[1,1,1,0]
            })
            return <Animated.View style={{flexDirection:'row', padding: SPACING,marginBottom:SPACING,backgroundColor:'rgba(255,255,255,0.8)',borderRadius:12,
                                shadowColor:"#000",
                                shadowOffset:{width:0,height:10},
                                shadowOpacity:0.3,
                                shadowRadius:20,
                                opacity,
                                elevation: 24,
                                transform:[{scale}]
                        }}>
                <Image 
                source={{uri: item.image}}
                style={{width:AVATAR_SIZE,height:AVATAR_SIZE,borderRadius:AVATAR_SIZE,
                        marginRight:SPACING/2,
                        }}
                />
                <View>
                <Text style={{fontSize:22,fontWeight:'700'}}>{item.name}</Text>
                <Text style={{fontSize:18,opacity:0.7}}>{item.jobTitle}</Text>
                <Text style={{fontSize:14,opacity:0.8,color:'#0099cc'}}>{item.email}</Text>
                </View>
            </Animated.View>
            }}
        
        />
        
        </View>
}
const style = StyleSheet.create({
    header: {
      paddingVertical: 20,
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
    },
});
export default Notifications;