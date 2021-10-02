import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { FlatList, StyleSheet, Text, View ,  Animated ,Image , Dimensions, Button ,TouchableOpacity} from 'react-native';
import LoginScreen from './LoginScreen';

const {width, height} = Dimensions.get('screen');
//const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];
const bgs = ['#A5BBFF', '#B98EFF', '#FF63ED', 'red'];
const DATA = [
  {
    "key": "3571572",
    "title": "جميع المتاجر في تطبيق واحد",
    "description": "يمكنك إختيار المتجر الأفضل والأقرب لك والتسوق من خلال تطبيق واحد على جوالك المحمول وأنت في بيتك او مكان عملك",
    "image": require("../assets/shop.png")
    //"https://image.flaticon.com/icons/png/256/3571/3571572.png"
  },
  {
    "key": "3571747",
    "title": "حقيبة تسوق خاصة بك مجانا",
    "description": "بعد إختيار المتجر المناسب لك يمكن التسوق وإختيار الاصناف التي تنسابك وجمعها في سلة تسوقك الخاصة",
    "image": require("../assets/cart.png")
    //"https://image.flaticon.com/icons/png/256/3571/3571747.png"
  },
  {
    "key": "3571680",
    "title": "Google Maps",
    "description": "يحتوي التطبيق على ميزة الوصول للمتاجر عن طريق الخرائط للتسهيل على عملائنا عملية التسوق",
    "image": require("../assets/map.jpg")
    //"https://image.flaticon.com/icons/png/256/3571/3571680.png"
  },
  {
    "key": "3571603",
    "title": "التوصيل السريع",
    "description": "تمتع بخدمة التوصيل السريع بعد الإنتهاء من التسوق وبضغطة زر واحدة فقط!",
    "image":require("../assets/delivery.webp")
    // "https://image.flaticon.com/icons/png/256/3571/3571603.png"
  }
]

const Indicator =({scrollX})=>{
  return (
     <View style={{position:'absolute',bottom:100,flexDirection:'row'}}>
       {DATA.map((_,i)=>{
          const inputRange=[(i-1) * width , i * width, (i+1) * width];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange:[0.8 , 1.4 , 0.8],
            extrapolate: 'clamp'
          });
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange:[0.6 , 0.9 , 0.6],
            extrapolate: 'clamp'
          });

         return (
         <Animated.View
           key={`indicator-${i}`}
           style={{ height:10, width:10,borderRadius:5,backgroundColor:'#fff',margin:10,opacity,transform:[{scale,}]}}
         />);
       })}
     </View>
  );
};

const Backdrop = ({scrollX})=>{
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_,i)=>i*width),
    outputRange: bgs.map((bg)=>bg),
  });
  return (
  <Animated.View
    style={[StyleSheet.absoluteFillObject,
      {
        backgroundColor,
      },
    ]}
  />
  );
}

const Square = ({scrollX}) =>{
  const YOLO = Animated.modulo(
    Animated.divide(
      Animated.modulo(scrollX,width),new Animated.Value(width)),
      1
      );

  const rotate = YOLO.interpolate({
    inputRange: [0,0.5,1],
    outputRange:['35deg','0deg','35deg']
  });

  const translateX = YOLO.interpolate({
    inputRange: [0,0.5,1],
    outputRange:[0,-height,0]
  });
   
  return <Animated.View
     style={{
        width:height,
        height: height,
        backgroundColor:'#fff',
        borderRadius:70,
        position:'absolute',
        top: -height * 0.6,
        left: -height * 0.26,
        transform:[
          {
            rotate,
          },
          {
            translateX,
          },
        ],
      }}
    />
}



export default function OnBoardScreen({navigation}) {
  const scrollX=React.useRef(new Animated.Value(0)).current ;
 
  
    return (
      <View style={styles.container2}>
        <StatusBar hidden />
        <Backdrop scrollX={scrollX}/>
        <Square scrollX={scrollX}/>
        <Animated.FlatList
          data={DATA}
          keyExtractor={item=>item.key}
          horizontal
          scrollEventThrottle={32}
          onScroll={Animated.event(
            [
              {nativeEvent: {contentOffset: {x: scrollX }}}],
              {useNativeDriver:false}
          )}
          contentContainerStyle={{paddingBottom: 50}}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({item})=>{
            return(
              <View style={{width ,alignItems : 'center',padding: 30}}>
                <View style={{flex: 0.7, justifyContent:'center'}}>
                    <Image source={item.image}
                        style={{
                          width : width / 2 ,
                          height : width / 2,
                          resizeMode:'contain'}}
                    />
                </View>
                <View style ={{flex:0.3,}}>
                  <Text style={{color:'#fff',fontWeight:'bold', fontSize:24, marginBottom: 10}}>{item.title}</Text>
                  <Text style={{color:'#fff'}}>{item.description}</Text>
                </View>
              </View>
            );
          }}
        />
        <Indicator scrollX={scrollX} />

        <View style={{flexDirection: 'row'}}>
          <View style={{margin:15}}>
            <TouchableOpacity  style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}>Register</Text>
            </TouchableOpacity>
          </View>
          
          <View style={{margin:15,}}>
            <TouchableOpacity
            //  onPress={() => navigation.navigate('LoginScreen')}
            onPress={() => navigation.navigate('App')}
              style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    
  },
  appButtonText: {
    fontSize: 18,
    color: "#565b61",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
