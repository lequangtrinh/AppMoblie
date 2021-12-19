
import React,{ useState} from 'react';
import { Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View,Image,Dimensions } from 'react-native';
import Rating from './Rating'

const {width,height}=Dimensions.get("window")
const styles = StyleSheet.create({
  container: {
  flexDirection:'row',
  justifyContent:'space-between',
  marginTop:5,
  flexWrap:'wrap',
  width:'100%',
  
  },
  imgFooter:{
    width:width/2-25,
   height:150,
   borderTopLeftRadius:10,
   borderTopRightRadius:10,
   marginBottom:5,
  },
  viewImgWrap:{
      width:width/2-25,
      height: width/2+20,
      marginTop:20,
      elevation:4,
      borderRadius:10,
      backgroundColor:'#F0F0F0'
  },
  imgIconsDate:{
      width:20,
      height:20,
     
  }
});

const ShopEat=()=>{
  return (
    <View style={styles.container}>
    
   <View style={styles.viewImgWrap}>
    <TouchableOpacity onPress={()=>Alert.alert('food')}>
    <Image style={styles.imgFooter} source={{uri:"https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg?w=700&q=90"}}></Image>
        <Text style={{marginLeft:5}}>Food 1</Text>
    </TouchableOpacity>
    <Rating></Rating>
    <View style={{flexDirection:'row',marginTop:5,marginHorizontal:10}}>
    <Image style={styles.imgIconsDate} source={require('../img/icon/calendar.png')}></Image>
   <Text style={{fontSize:12, marginLeft:10,}}>Month Date</Text>
    </View>
    </View>
    <View style={styles.viewImgWrap}>
    <TouchableOpacity onPress={()=>Alert.alert('food')}>
    <Image style={styles.imgFooter} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQN5KpbB2ETXHgOj4HVTku0AMSHdKbz3VFCQ&usqp=CAU"}}></Image>
        <Text style={{marginLeft:5}}>Full Toping</Text>
    </TouchableOpacity>
    <Rating></Rating>
    <View style={{flexDirection:'row',marginTop:5,marginHorizontal:10}}>
    <Image style={styles.imgIconsDate} source={require('../img/icon/calendar.png')}></Image>
   <Text style={{fontSize:12, marginLeft:10,}}>Month Date</Text>
    </View>
    </View>
    <View style={styles.viewImgWrap}>
    <TouchableOpacity onPress={()=>Alert.alert('food')}>
    <Image style={styles.imgFooter} source={{uri:"https://img.okezone.com/content/2020/03/03/298/2177622/intip-menu-makanan-sehat-untuk-abk-observasi-korona-covid-19-GMNNuENnFW.jpg"}}></Image>
        <Text style={{marginLeft:5}}>Cơm Xào</Text>
       
    </TouchableOpacity>
    <Rating></Rating>
    <View style={{flexDirection:'row',marginTop:5,marginHorizontal:10}}>
    <Image style={styles.imgIconsDate} source={require('../img/icon/calendar.png')}></Image>
   <Text style={{fontSize:12, marginLeft:10,}}>Month Date</Text>
    </View>
    </View>
    <View style={styles.viewImgWrap}>
    <TouchableOpacity onPress={()=>Alert.alert('food')}>
    <Image style={styles.imgFooter} source={{uri:"https://cdn.roomme.id/medium/article_1607421411.jpg"}}></Image>
        <Text style={{marginLeft:5}}>Mì Xào</Text>
    </TouchableOpacity>
    <Rating></Rating>
    <View style={{flexDirection:'row',marginTop:5,marginHorizontal:10}}>
    <Image style={styles.imgIconsDate} source={require('../img/icon/calendar.png')}></Image>
   <Text style={{fontSize:12, marginLeft:10,}}>Month Date</Text>
    </View>
    </View>
    </View>
  );
}
export default ShopEat
