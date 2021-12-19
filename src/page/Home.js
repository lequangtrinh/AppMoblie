import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View,Image } from 'react-native';
import imgHeader from '../img/images/awan.jpg';
import DetailHeader from '../comparent/DeatailHeadr';
import DetailFooter from '../comparent/DetailFooter';
import ShopEat from '../comparent/ShoppEat';
import { ScrollView } from 'react-native';
import {idLogin} from '../data/Data'
import { TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';
const {width,height}=Dimensions.get("window")
const styles = StyleSheet.create({
  container: {
   flex:1
  },
  img:{
    width:width,
    height:140,
  },
  textHeader:{
    marginTop:15,
    alignSelf:'center',
    alignContent:'center',
    position:"absolute",
    fontSize:18,
    fontWeight:'bold',
    top:30,
    color:'#383838'
  },
  viewHeader:{
    marginHorizontal:18,
    height:150,
    backgroundColor:'#FFFFFF',
    marginTop:-60,
    elevation:4,
    borderRadius:15,
  },
  textViewHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:13,
    marginTop:10,
  },
  ViewBoderBottom:{
    height:.8,
    backgroundColor:'#adadad',
    marginTop:10,
  },
  viewMargin:{
    width:width,
    height:15,
    backgroundColor:'#FAFAFA',
  marginVertical:15,
  }
});

const App=()=> {
  return (
    <View style={styles.container}>
      <StatusBar style='auto'></StatusBar>
      <ScrollView>
      <Image style={styles.img} source={imgHeader} ></Image>
      <Text style={styles.textHeader}>Grab</Text>
      <TouchableOpacity style={{width:20,height:20, position:"absolute",left:5,top:30}} onPress={()=>{Alert.alert('232')}}>
      <Image style={{width:20,height:20, position:"absolute"}} source={require('../assets/icons/list.png')}
      
      ></Image>
      </TouchableOpacity>
      <View style={styles.viewHeader}>
      <View style={styles.textViewHeader}>
      <Text style={{fontSize:16}}>Pay</Text>
        <Text style={{fontSize:16,color:'#696969'}}>TN 1.000.000</Text>
      </View>
      <View style={styles.ViewBoderBottom}></View>
     
      <DetailHeader></DetailHeader>
      </View>
      <View style={{ marginHorizontal:35}}>
        <DetailFooter></DetailFooter>
      </View>
      <View style={styles.viewMargin}></View>
      <View style={{ marginHorizontal:20}}>
       <ShopEat></ShopEat>
      </View>
      </ScrollView>
      
    </View>
  );
}
export default App

