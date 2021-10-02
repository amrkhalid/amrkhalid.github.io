import React, { Component } from "react";
import { View,FlatList,StyleSheet,ScrollView,SafeAreaView, StatusBar} from "react-native";
import {Appbar,Card,Text,Button} from "react-native-paper";
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const orderData=[
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Burgers",
    price:"$9.00",
    quantity:"2"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Shakes",
    price:"$18.00",
    quantity:"1"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Sandwhichs",
    price:"$50.00",
    quantity:"5"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Continetial",
    price:"$90.00",
    quantity:"2"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "chinees",
    price:"$12.00",
    quantity:"1"
  },
  {
    imageUrl: "http://lorempixel.com/400/200/food",
    title: "Local Food",
    price:"$15.00",
    quantity:"2"
  }
];


// create a component
class OrderScreen extends Component {
  constructor(props){
    super(props);
    this.state ={
      orders:orderData
    }
  }
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <StatusBar hidden/>
        <View style={styles.header}>
            <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Orders History</Text>
        </View>
        <View
  style={{
    borderBottomColor: '#d60d14',
    borderBottomWidth: 1,
  }}
/>
        {/* <Appbar.Header>
          <Appbar.Action
            icon="menu"
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.toggleDrawer())
            }
          />
          <Appbar.Content title="Orders" />
          <Appbar.Action icon="shopping-cart" />
        </Appbar.Header> */}
        <ScrollView>
        <SafeAreaView>
        <FlatList
        contentContainerStyle={{paddingBottom:50}}
        showsVerticalScrollIndicator={false}
        data={this.state.orders}
        renderItem={({ item: rowData }) =>{
          return (
                <Card style={{
                  elevation:1,
                  borderColor:"#000",
                  margin:10,
                  flex:1
                }}>
                    <Card.Title title={rowData.title} />
                    <Card.Cover source={{ uri: rowData.imageUrl }} />
                    <View style={styles.cardContainer}>
                    <Card.Content style={styles.cardContent}>
                      <Text>Total : {rowData.price}</Text>
                      <Text>Quantity : {rowData.quantity}</Text>
                    </Card.Content>
                    <Card.Actions>
                        <Button mode="outlined" color='#d60d14'>Reorder</Button>
                    </Card.Actions>
                    </View>
                </Card>
              );
        }}
        />
        </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
      },
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  cardContainer:{
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly"
  },
  cardContent:{
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around"
  }
});

//make this component available to the app
export default OrderScreen;