import React,{useState,useEffect} from 'react'
import {View,StatusBar,TouchableNativeFeedback,StyleSheet,Text}from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
 import{useNavigation} from '@react-navigation/native'
 import Search from '../comparent/SearchFood'
const ShipOrder=()=>{
    const navigation=useNavigation();
    return(
        <View style={styles.container}>
       
            <View style={{top:50}}>
            <Search></Search>
            </View>
        </View>
    )
}
export default ShipOrder
const styles=StyleSheet.create({
    container:{
        flex: 1,
        
    },
})