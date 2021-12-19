import React, { useEffect, useState } from "react";
import { 
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,Animated
} from "react-native";
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import Popular from "./foodChild/Popular";
import All from './foodChild/All';
import Menu from './foodChild/Menu'
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import {ShopCart,dataModalCart}from '../data/Data'
import * as ICON from '@expo/vector-icons';
import ModalHomeCart from './ModalCartHome'



const width = Dimensions.get("screen").width;

const HomeFood=(router)=>{
   const [Modal,setModal]=useState(false)
  const [countShopping,setCountShopping]=useState(0)
  const [animation,setAnimation]=useState(new Animated.Value(0))
 const ShowModalAnimated=()=>{
   Animated.timing(animation,{
     toValue:1,
     duration:500,
     useNativeDriver:false
   }).start();
 }
  useEffect(()=>{
    if(router.route.params === undefined){
      setCountShopping(0);
      return;
    }
    else{
     let countCart=0
      setCountShopping(router.route.params.count)
    
      for(let i=0;i<ShopCart.length;i++){
       countCart=countCart+ShopCart[i];
     
       setCountShopping(countCart)
      }
    }
  },)
    return(
      <View style={styles.container}>
      <StatusBar style="auto"></StatusBar>
          <View style={styles.header}>
              <ImageBackground
              source={require("../img/images/header.png")}
              style={styles.imageBackground}
              resizeMode="contain"
              >
                  <Text style={styles.title}>HOME</Text>
              </ImageBackground>
          </View>
          <View style={styles.tabbar}>
            <ScrollableTabView
            
              initialPage={0}
              tabBarActiveTextColor="green"
              renderTabBar={() => <DefaultTabBar
                underlineStyle={{
                  backgroundColor:'green'
                }} />}
            >
              <All tabLabel="All"/>
              <Menu tabLabel="Menu"/>
              <Popular tabLabel="Popular" />
            </ScrollableTabView>
          </View>
          <View style={styles.viewBox}>
            <TouchableOpacity style={styles.bnt} onPress={()=>{ShowModalAnimated,setModal(!Modal)}}>
            <View style={{width:30,height:30,borderRadius:15,backgroundColor:"red",marginLeft:30,marginTop:-20}}>
            <Text style={{color:"#fff",textAlign:"center",fontSize:20}}>{countShopping}</Text>
            </View>
              <ICON.MaterialIcons name="add-shopping-cart" size={39}></ICON.MaterialIcons>
            </TouchableOpacity>
          </View>
          <ModalHomeCart visibleModal={Modal} setVisibleModal={setModal} count={countShopping}></ModalHomeCart>
      </View>
    )
  }
export default HomeFood
const styles = StyleSheet.create({
  container: {
    flex:1,
   backgroundColor:"#fff",
  },
  header: {
    marginTop:20,
    position:'absolute'
  },
  tabbar: {
    flex:1,
    marginTop: width*0.3,
    paddingHorizontal:30
  },
  imageBackground: {
    width: width*0.4,
    height: width*0.4,
    alignItems:'center'
  },
  title: {
    color:'white',
    marginTop:25,
    fontWeight:'bold',
    fontSize:25
  },
  bnt:{
    width:70,height:70,
    backgroundColor:"#fff",
    borderRadius:70/2,
  left:"80%",
    alignItems:"center",
    justifyContent:"center",
    justifyContent:"center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
viewBox:{
  marginTop:-70,
  
}
});