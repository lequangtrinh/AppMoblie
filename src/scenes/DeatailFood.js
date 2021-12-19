import React, { useEffect, useState } from "react";
import { 
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  StatusBar,
  ScrollView,
  Alert,
  ToastAndroid
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {useNavigation}from '@react-navigation/native'
import { TouchableOpacity } from "react-native-gesture-handler";
import {ShopCart ,dataModalCart}from '../data/Data'
const DetailFood =(router)=>{
  const { width, height } = Dimensions.get("window");
  const [count,setCount]=useState(0);
  const [countPrice,setCountPrice]=useState(0)
  useEffect(()=>{
    //delete ar[4]; // xóa phần tử có chỉ số index là 4
    setCountPrice(count * router.route.params.price)
  })
    const navigation=useNavigation()
    return(
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={require("../img/images/header_detail.png")}
          style={{flex:1, alignItems:'center'}}
         
        >
         <TouchableOpacity style={{marginHorizontal:18,paddingRight:'85%'}} onPress={()=>navigation.goBack()}>
          <Image style={{width:30,height:30,marginTop:20}} source={require('../assets/icons/back.png')}
               />
          </TouchableOpacity>
          <View style={styles.image_container}>
              <Image 
                source={router.route.params.images}
                style={styles.image}
              />
          </View>
          <View
                style={{
                    width: width,
                    height: 50,
                    justifyContent: 'center',
                    flexDirection: 'row'
                }}
            >
                <TouchableOpacity
                    style={{
                        width: 50,
                        backgroundColor: "#8cc631",
                       
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderTopLeftRadius: 25,
                        borderBottomLeftRadius: 25
                    }}
                    onPress={() => {if(count==0){
                      setCount(0)
                    }
                    else{
                      setCount(count - 1)
                    }
                    }}
                >
                    <Text style={{ fontSize: 30, lineHeight: 36 }}>-</Text>
                </TouchableOpacity>

                <View
                    style={{
                        width: 50,
                        height:36,
                        backgroundColor: "#8cc631",
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{ fontSize: 20, lineHeight: 30 }}>{count}</Text>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        backgroundColor: "#8cc631",
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderTopRightRadius: 25,
                        borderRightColor:'#000',
                        borderBottomRightRadius: 25
                    }}
                    onPress={() => {setCount(count + 1)}}
                >
                    <Text style={{  fontSize: 30, lineHeight: 36  }}>+</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
        <ScrollView style={styles.footer}>
      

            <View style={styles.status}>
                <Text style={{color:'green'}}>AVALIABLE</Text>
            </View>
            <Text style={styles.textPrice}>{countPrice}$</Text>
            <Text numberOfLines={2} style={styles.textName}>{router.route.params.name}</Text>
            <Text  style={styles.textDetail}>Vui lòng chọn số lượng và nhấn vào đặt món khi đã chon xong</Text>
            <TouchableOpacity onPress={()=>{ToastAndroid.show('Thành Công',ToastAndroid.SHORT,navigation.navigate("HomeFood",{count:count})),ShopCart.push(count),dataModalCart.push({name:router.route.params.name,img:router.route.params.images,price:router.route.params.price,count:count})}}>
            <LinearGradient
            start={{x: 0, y: 0}} 
            end={{x: 1, y: 0}} 
            colors={['#009245', '#8cc631']}
            style={styles.button}
            >
           <Text style={styles.textOrder}>Đặt Món</Text>
              
            </LinearGradient>
            </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
const height = Dimensions.get("screen").height;
const height_image = height * 0.5 * 0.5;
export default DetailFood
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white'
  },
  footer: {
    flex:1,
    paddingHorizontal:40
  },
  image_container: {
    width: height_image,
    height: height_image,
    marginTop: height_image/3
  },
  image: {
    width:'100%',
    height:'100%',
    borderWidth:5,
    borderColor:'white',
    borderRadius: height_image/2
  },
  back:{
    left:0,
    width:30,
    height:30,
    marginLeft:-200,
  },
  status: {
    width:100,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderRadius:50,
    paddingVertical:3,
    borderColor:'green'
  },
  textPrice: {
    color:'green',
    fontWeight:'bold',
    fontSize:30,
    marginTop:20
  },
  textName: {
    color: '#3e3c3e',
    fontWeight:'bold',
    fontSize:45,
    marginTop:5
  },
  textDetail: {
    color:'gray',
    marginTop:10
  },
  button: {
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
    paddingVertical:10,
    borderRadius:100
  },
  textOrder: {
    color:'white',
    fontWeight:'bold',
    fontSize:18
  }
});