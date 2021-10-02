import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image,Dimensions,FlatList,Button} from 'react-native';
import COLORS from '../src/consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {PrimaryButton} from './Button';
import foods from '../src/consts/foods';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

//const Cart=({navigation})=>{
class Cart extends React.Component{

    state = {
      dataCart:[]
    }
 
  clearAsyncStorage = async ()=> {
   await AsyncStorage.clear();
  }
  
  componentDidMount(){
    AsyncStorage.getItem("cart").then((cart)=>{
      if( cart !==null){
        const cartfood = JSON.parse(cart)
        this.setState({dataCart:cartfood })
        console.log(cartfood);
      }
      
    })
    .catch((err)=>{
      alert(err)
    })
  }
  onChangeQuantity(i,type){
    // const cart  = this.state.dataCart;
    // console.log(i);
    // let cant = cart[i].quantity;
    
    if(type){
      // cant = cant +1
      // cart[i].quantity = cant
      // this.setState({dataCart: cart})
      alert("true");
    }else{
      alert("false");
    }
  }
  render(){
  const { navigation } = this.props;

  CartCard = ({item,i}) => {
        return (
          <View style={style.cartCard}>
            <Image source={{uri:item.img}} style={{height: 80, width: 80}} />
            <View
              style={{
                height: 100,
                marginLeft: 10,
                paddingVertical: 20,
                flex: 1,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.nameEN}</Text>
              <Text style={{fontSize: 13, color: COLORS.grey}}>
                {item.ingredients}
              </Text>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>₪{item.price * item.quantity}</Text>
            </View>
            <TouchableOpacity onPress={() => this.onChangeQuantity(item,false)}
                         style={{width:32,backgroundColor:COLORS.primary,alignItems:'center',
                         justifyContent:'center',borderTopLeftRadius:20,borderBottomLeftRadius:20}}>

                      <Text style={{fontSize: 25, lineHeight: 32,color:COLORS.white}}>-</Text>
            </TouchableOpacity>
            <View style={{
                        width: 35,
                        height:32,
                        backgroundColor: COLORS.primary,
                        alignItems: 'center',
                        justifyContent: 'center',  }}
                    >
              <Text style={{fontSize: 20, lineHeight: 30,color:COLORS.white}}>{item.quantity}</Text>
            </View>
            <TouchableOpacity style={{
                                  width: 32,
                                  backgroundColor: COLORS.primary,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  borderTopRightRadius: 20,
                                  borderBottomRightRadius: 20
                          }}  onPress={() => this.onChangeQuantity(i,true)}
                      >
                     <Text style={{ fontSize: 25, lineHeight: 32 ,color:COLORS.white }}>+</Text>
              </TouchableOpacity>
            {/* <View style={{marginRight: 20, alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>3</Text>
              <View style={style.actionBtn}>
                <Icon name="remove" size={25} color={COLORS.white} />
                <View style={{width:10}}></View>
                <Icon name="add" size={25} color={COLORS.white} />
              </View>
            </View> */}
          </View>
        );
      };

    return(
        <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
            <View style={style.header}>
                <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Cart</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 80}}
                keyExtractor={(item,index)=> index.toString()}
                data={this.state.dataCart}
                renderItem={({item}) => <CartCard item={item} />}
                ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
                ListFooterComponent={() => (
                <View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginVertical: 15,
                        }}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                            Total Price
                        </Text>

                        {/* <Text>{JSON.stringify(this.state.dataCart)} </Text> */}

                        <Text style={{fontSize: 18, fontWeight: 'bold',}}>₪9</Text>
                    </View>
                    <View style={{marginHorizontal: 30}}>
                        <PrimaryButton title="CHECKOUT" />
                    </View>
                    <View style={{marginHorizontal: 30,paddingTop:20}}>
                        <TouchableOpacity activeOpacity={0.8}  onPress={this.clearAsyncStorage} style={style.btnContainer}>
                           <Text style={style.title}>Clear All Items</Text>
                        </TouchableOpacity>
                    </View>

           
                </View>
                )}
                
            />
        </SafeAreaView>
    );
}
}
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 90,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {color: COLORS.white, fontWeight: 'bold', fontSize: 18},
  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cart;