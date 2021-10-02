import React from 'react';
import {Dimensions, Image, StyleSheet, View, ScrollView,FlatList, TouchableOpacity,TouchableHighlight,SafeAreaView} from 'react-native';
import COLORS from '../src/consts/colors';
//import categories from '../src/consts/categories';
import foods from '../src/consts/foods';
import { ImageBackground } from 'react-native';
const {width,height} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;
const thumbMeasure = (width - 48 - 32) / 3;
const image = { uri: "https://scontent.fjrs17-1.fna.fbcdn.net/v/t1.18169-9/522709_415470285131355_584859440_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=d2e176&_nc_ohc=etc4pydqf0EAX-FcBS8&_nc_ht=scontent.fjrs17-1.fna&oh=8cc1ad40d3ac53d7ab7979e71b76317c&oe=609226CB" };
import { Text,Block, theme,Button, Button as GaButton } from 'galio-framework';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

//Market  = ({navigation}) => {
class Market extends React.Component{
//192.168.1.68
    state ={
      dataItems:[],
      dataCategories:[],
      selectCatg:0,
      selectedCategoryIndex:0,

    }
    fetchData = async()=>{
      const response = await fetch('http://192.168.1.68:4545/items');
      const users = await response.json();
      this.setState({dataItems:users});
    }
    fetchData2 = async()=>{
      const response2 = await fetch('http://192.168.1.68:4545/categories');
      const users2 = await response2.json();
      this.setState({dataCategories:users2});
    }

    componentDidMount(){
     this.fetchData();
      this.fetchData2();
    }

    onClickAddCart = async (data)=>{
      const itemcart = {
        itemMarket: data,
        quantity:  1,
        price: data.price,
        img: data.img,
        nameAR: data.nameAR,
        nameEN: data.nameEN,
        ingredients:data.ingredients
      }
       AsyncStorage.getItem('cart').then((datacart)=>{
          if (datacart !== null) {
            // We have data!!
            const cart = JSON.parse(datacart)
            cart.push(itemcart)
            AsyncStorage.setItem('cart',JSON.stringify(cart));
          }
          else{
            const cart  = []
            cart.push(itemcart)
            AsyncStorage.setItem('cart',JSON.stringify(cart));
          }
          alert("Add Cart")
        })
        .catch((err)=>{
          alert(err)
        })
    }

    render(){
    const {navigation, route} = this.props;
    const itemRoute = route.params;
   
    ListCategories = () => {
      // const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
      return (
        <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesListContainer}>
                
              {this.state.dataCategories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.8}
                  onPress={() => {this.setState({selectCatg:category.ID,selectedCategoryIndex:index}); } }> 

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
                        source={{uri:category.img}} 
                        style={{height: 35, width: 35, resizeMode: 'cover'}}
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        marginLeft: 10,
                        color:
                          this.state.selectedCategoryIndex == index
                            ? COLORS.white
                            : COLORS.primary,
                      }}>
                      {category.nameAR}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
        </View>
      );
    };
    
   Card = ({itemMarket}) => {
    let catg = this.state.selectCatg
    if(catg==0||catg==itemMarket.category_ID)
    {
        return (
          <TouchableHighlight
            underlayColor={COLORS.white}
            activeOpacity={0.9}
           // onPress={() => navigation.navigate('DetailsScreen', itemMarket)}
              onPress={() => this.onClickAddCart(itemMarket)}
            >
            <View style={styles.card}>
              <View style={{alignItems: 'center', top: -40}}>
                <Image source={{uri: itemMarket.img}} style={{height: 120, width: 120,borderRadius:80}} />
              </View>
              <View style={{marginHorizontal: 20}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>{itemMarket.nameEN}</Text>
                {/* <Text style={{fontSize: 14, color: COLORS.grey,}}>{itemMarket.description}</Text> */}
                <Text style={{fontSize: 16, marginTop: 2,}}>{itemMarket.price} ₪</Text>
              </View>
              <View
                style={{
                  marginTop: 10,
                  marginHorizontal: 20,
                  // flexDirection: 'row',
                  justifyxContent: 'space-between',
                }}>
                <View style={styles.addToCartBtn}>
                  <Icon name="add" size={20} color={COLORS.white} />
                  <Text style={{color:'white',fontStyle:'italic',fontWeight: 'bold'}}>Add Cart</Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        );
        }else{
          return(
            <View>
            </View>
          );
        }
      };

    return(
        <SafeAreaView>

           <ScrollView  showsVerticalScrollIndicator={false}> 
           <Block flex={0.6} >
              <ImageBackground
                source={{uri: itemRoute.background}}
                style={styles.profileContainer}
                imageStyle={styles.profileBackground}
              >
            {/* <View style={{width:"10%",paddingLeft:20}}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Image
                            source={require('../src/images/17.png')}
                            style={{marginVertical:40}}
                        />
                    </TouchableOpacity>   
            </View> */}
            
                <Block>
                  <Block style={{ position: 'absolute', width: width, zIndex: 5, paddingHorizontal: 20 }}>
    
                    <Block middle style={{ top: height * 0.11 }}>
                      <Image source={{uri: itemRoute.logo}} style={styles.avatar} />
                    </Block>
                    <Block style={{ top: height * 0.129 }}>
                      <Block middle >
                        <Text
                          style={{
                            // fontFamily: 'montserrat-bold',
                            marginBottom: 16 / 2,
                            fontWeight: 'bold',
                            fontSize: 26,
                            
                          }}
                          color='black'
                       
                          >
                          {itemRoute.name}
                        </Text>

                        <Text
                          size={16}
                          color="#d60d14"
                          style={{
                            marginTop: 5,
                            // fontFamily: 'montserrat-bold',
                            lineHeight: 20,
                            fontWeight: 'bold',
                            fontSize: 18,
                            // opacity: .8,
                            // color:'#ffffff'
                          }}
                        >
                          Super Market
                        </Text>
                      </Block>
                      <Block style={styles.info}>
                        <Block row space="around">
                        <Block middle>
                            <Text
                              color="black"
                              size={18}
                              // style={{ marginBottom: 4}}
                              bold
                            >
                              126
                            </Text>
                            <Text color="black" bold>
                            ــــــــــــــ
                            </Text>
                            <Text  size={16} color='black' bold>
                              Followers
                            </Text>
                          </Block>

                          <Block middle>
                            <Text
                              size={18}
                              color="black"
                              // style={{ marginBottom: 4}} 
                              bold
                            >
                              2K
                            </Text>
                            <Text color="black" bold>
                            ــــــــــــــ
                            </Text>
                            <Text  size={16} color="black" bold>
                            Views
                            </Text>
                          </Block>

                          <Block middle>
                            <Text
                              color="black"
                              size={18}
                              // style={{ marginBottom: 4 }}
                              bold
                            >
                              26
                            </Text>
                            <Text color="black" bold>
                            ــــــــــــــ
                            </Text>
                            <Text size={16} color="black" bold>
                              Comments
                              </Text>
                          </Block>

                        

                        </Block>
                      </Block>
                    </Block>

                  </Block>


                  <Block
                    middle
                    row
                    style={{ position: 'absolute', width: width, top: height * 0.6 - 28, zIndex: 99 }}
                  >
                    <Button style={{backgroundColor:'#d60d14', width: 114, height: 44, marginHorizontal: 5, elevation: 0 }} textStyle={{ fontSize: 16 }} round>
                      Follow
                    </Button>
                    <GaButton
                      round
                      onlyIcon
                      shadowless
                      icon="instagram"
                      iconFamily="Font-Awesome"
                      iconColor={'white'}
                      iconSize={16 * 1.375}
                      color={'#555555'}
                      style={styles.social}
                    />
                    <GaButton
                      round
                      onlyIcon
                      shadowless
                      icon="facebook"
                      iconFamily="Font-Awesome"
                      iconColor={'white'}
                      iconSize={16 * 1.375}
                      color={'#555555'}
                      style={styles.social}
                    />
                  </Block>
                </Block>
              </ImageBackground>


            </Block>
            {/* <Block /> */}
     
                    {/* <ListCategories/>  */}
                    
                    <View style={{paddingTop:height*0.65}}>
                      <ListCategories/> 
                      <Text>Categories {this.state.selectCatg}</Text>
                      <FlatList
                            numColumns={2}
                            keyExtractor={(item,index)=> index.toString()}
                            data={this.state.dataItems}
                            renderItem={({item}) => <Card itemMarket={item} />}    
                      />
                      {/* <Text>{JSON.stringify(this.state.dataCart)} </Text>  */}
                    </View>
            </ScrollView> 
        </SafeAreaView>
    );
}
}
const styles = StyleSheet.create({
    categoryBtnImgCon: {
        height: 35,
        width: 35,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
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
        width: (width /2) -60,
        borderRadius: 5,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row'
        
      },
      container: {
        flex: 1,
        flexDirection: "column"
      },
      imageProfile: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        height:200
      },
      social: {
        width:16 * 3,
        height: 16 * 3,
        borderRadius: 16 * 1.5,
        justifyContent: 'center',
        zIndex: 99,
        marginHorizontal: 5
      },
      avatar: {
        width: thumbMeasure,
        height: thumbMeasure,
        borderRadius: 50,
        borderWidth: 0
      },
      profileContainer: {
        width,
        // height:height*0.65,
        padding: 0,
        zIndex: 1
      },
      profileBackground: {
        width,
        height: height * 0.6,
        opacity:0.3,
        borderBottomLeftRadius:80,

        
      },
      avatar: {
        width: thumbMeasure,
        height: thumbMeasure,
        borderRadius: 50,
        borderWidth: 0
      },
      info: {
        marginTop: 30,
        paddingHorizontal: 10,
        height: height * 0.8
      },
});

export default Market;