import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image,Dimensions} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../src/consts/colors';
import {SecondaryButton} from './Button';
const {width,height} = Dimensions.get('screen');
const DetailsScreen = ({navigation, route}) => {
const item = route.params;

// const onClickAddCart=(data)=>{

//   const itemcart = {
//     food: data,
//     quantity:  1,
//     price: data.price
//   }

//   AsyncStorage.getItem('cart').then((datacart)=>{
//       if (datacart !== null) {
//         // We have data!!
//         const cart = JSON.parse(datacart)
//         cart.push(itemcart)
//         AsyncStorage.setItem('cart',JSON.stringify(cart));
//       }
//       else{
//         const cart  = []
//         cart.push(itemcart)
//         AsyncStorage.setItem('cart',JSON.stringify(cart));
//       }
//       alert("Add Cart")
//     })
//     .catch((err)=>{
//       alert(err)
//     })
// };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold',paddingStart:'23%',color:COLORS.primary}}>Market Name</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        
            <View style={{ height: 300,}}>
      
                <View style={{alignItems:'center'}}>
                   <Image source={item.image}  resizeMode="cover" style={{ width:"80%",height: "100%",}} />
                </View>
          
                <View  style={{
                          position: 'absolute',
                          bottom: - 8,
                          width: width,
                          height: 50,
                          justifyContent: 'center',
                          flexDirection: 'row' }}
                  >
                    <TouchableOpacity style={{width:50,backgroundColor:'white',alignItems:'center',justifyContent:'center',borderTopLeftRadius:25,borderBottomLeftRadius:25}}>
                      <Text style={{fontSize: 30, lineHeight: 38,color:COLORS.primary}}>-</Text>
                    </TouchableOpacity>
                    <View
                          style={{
                                  width: 50,
                                  height:38,
                                  backgroundColor: COLORS.white,
                                  alignItems: 'center',
                                  justifyContent: 'center',  }}
                    >
                        <Text style={{fontSize: 22, lineHeight: 30}}>9</Text>
                    </View>
                    <TouchableOpacity
                        style={{
                                  width: 50,
                                  backgroundColor: COLORS.white,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  borderTopRightRadius: 25,
                                  borderBottomRightRadius: 25
                          }} // onPress={() => editOrder("+", item.menuId, item.price)}
                      >
                        <Text style={{ fontSize: 30, lineHeight: 38 ,color:COLORS.primary }}>+</Text>
                      </TouchableOpacity>
                  </View>
            </View>
            {/* <View
                style={{
                      width: width,
                      alignItems: 'center',
                      // marginTop: 15,
                      paddingHorizontal: 10 * 2,
                      // backgroundColor:COLORS.light
                      }}
            >
                <Text style={{ marginVertical: 10, textAlign: 'center', fontSize: 22, lineHeight: 30  }}>Item Name</Text>
               
                <Text style={{ fontSize: 16, lineHeight: 22}}>description</Text>
                
            </View> */}
            <View style={{height:2,width:10}}></View>
            <View style={style.details}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 25, fontWeight: 'bold', color: COLORS.white}}>
                  {item.name}
                </Text>
                <View style={style.iconContainer}>
                  <Icon name="favorite-border" color={COLORS.primary} size={25} />
                </View>
              </View>
              <Text style={style.detailsText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not
                only five centuries.
              </Text>
              <View style={{marginTop: 40, marginBottom: 40}}>
                <SecondaryButton title="Add To Cart" />
              </View>
            </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
  },
});

export default DetailsScreen;
