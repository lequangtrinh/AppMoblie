import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const styles = StyleSheet.create({
  container: {
   flex:1
  },
  DetailPay:{
    flexDirection:'row'
  },
  imgDetailPay:{
   width:45,
   height:45,
   marginTop:25,
    marginHorizontal:40,
  },
});

export default function DetailHeader() {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.DetailPay}>
      <View>
      <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
      <Image style={styles.imgDetailPay} source={require('../img/icon/pay.jpg')}></Image>
        <Text style={{alignSelf:'center',marginTop:5}}>App</Text>
      </TouchableOpacity>
      </View>
       <View>
       <TouchableOpacity onPress={()=>Alert.alert('2')}>
       <Image style={styles.imgDetailPay} source={require('../img/icon/topup.jpg')}></Image>
       <Text style={{alignSelf:'center',marginTop:5}}>Too UP</Text>
       </TouchableOpacity>
       </View>
        <View>
        <TouchableOpacity onPress={()=>Alert.alert('3')}>
        <Image style={styles.imgDetailPay} source={require('../img/icon/reward.jpg')}></Image>
        <Text style={{alignSelf:'center',marginTop:5}}>King</Text>
        </TouchableOpacity>
        </View>
        <View>
      <TouchableOpacity onPress={()=>Alert.alert('1')}>
      <Image style={styles.imgDetailPay} source={require('../img/icon/pay.jpg')}></Image>
        <Text style={{alignSelf:'center',marginTop:5}}>App</Text>
      </TouchableOpacity>
      </View>
       <View>
       <TouchableOpacity onPress={()=>Alert.alert('2')}>
       <Image style={styles.imgDetailPay} source={require('../img/icon/topup.jpg')}></Image>
       <Text style={{alignSelf:'center',marginTop:5}}>Too UP</Text>
       </TouchableOpacity>
       </View>
        <View>
        <TouchableOpacity onPress={()=>Alert.alert('3')}>
        <Image style={styles.imgDetailPay} source={require('../img/icon/reward.jpg')}></Image>
        <Text style={{alignSelf:'center',marginTop:5}}>King</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

