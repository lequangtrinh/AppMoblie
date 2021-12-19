
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Home,Account,Activity,Payment,Inbox,Food,CallOTP}from '../page/Index';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {HomeFood}from '../scenes/indexFood';
import ShipOder from '../scenes/ShipPage'
import {Loading}from '../comparent/IndexComparent'
import Forgot from '../scenes/Forgot'
import Login from '../scenes/Login'
import SingUp from '../scenes/SingUp'
import DetailFood from '../scenes/DeatailFood'
import ForgotPassWord from '../scenes/ForfotPassWord'
import ShipOrder from '../scenes/ShipPage';
import HomeActivity from '../scenes/PageActivity';
import DetailActivity from '../scenes/DetailActivity'
import OTPPhonebook from '../page/OTPPhonebook'
import QRPayMent from '../scenes/QRPayMent'
const Tab =createMaterialBottomTabNavigator();
const Stack=createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack=()=>{
  return(
    <Stack.Navigator 
  initialRouteName="Home"
    >
       <Stack.Screen name="Loading" component={Loading}
       options={{
        Title:'Loading',
        headerShown:false
      }}
      ></Stack.Screen>
       <Stack.Screen name="Home" component={BottomTab}
      options={{
        Title:'Home',
       headerShown:false
      }}
      ></Stack.Screen>
     <Stack.Screen name="HomeFood" component={MenuFood}
       options={{
        Title:'HomeFood',
        headerShown:false
      }}
      
      ></Stack.Screen>
      <Stack.Screen name="MenuActivity" component={MenuActivity}
       options={{
        Title:'MenuActivity',
        headerShown:false
      }}
      
      ></Stack.Screen>
       <Stack.Screen name="ShipOder" component={ShipFood}
       options={{
        Title:'ShipOder',
        headerShown:false
      }}
      ></Stack.Screen>
      <Stack.Screen name="PayMent" component={MenuPayMent}
       options={{
        Title:'QR',
        headerShown:false
      }}
      ></Stack.Screen>
         <Stack.Screen name="Login" component={StackLoading}
       options={{
       
        Title:'Login',
        headerShown:false
      }}
      ></Stack.Screen>
     
    </Stack.Navigator>
  )
}
const ShipFood=()=>{
  return(
    <Stack.Navigator
     initialRouteName="ShipOder"
     >
   <Stack.Screen name="ShipOder" component={ShipOrder}
    options={{
     Title:'ShipOder',
     headerShown:false
   }}
   ></Stack.Screen>
    </Stack.Navigator>
  )
}
// home của món ăn
const MenuFood=()=>{
  return(
    <Stack.Navigator
     initialRouteName="HomeFood"
     >
<Stack.Screen name="HomeFood" component={HomeFood}
    options={{
     Title:'HomeFood',
     headerShown:false
   }}
   ></Stack.Screen>
   <Stack.Screen name="DetailFood" component={DetailFood}
    options={{
     Title:'DetailFood',
     headerShown:false
   }}
   ></Stack.Screen>
   
    </Stack.Navigator>
  )
}
const MenuActivity=()=>{
  return(
    <Stack.Navigator
     initialRouteName="DetailActivity"
     >
<Stack.Screen name="HomeActivity" component={HomeActivity}
    options={{
     Title:'HomeActivity',
     headerShown:false
   }}
   ></Stack.Screen>
   <Stack.Screen name="DetailActivity" component={DetailActivity}
    options={{
     Title:'DetailActivity',
     headerShown:false
   }}
   ></Stack.Screen>
    </Stack.Navigator>
  )
}
const MenuPayMent=()=>{
  return(
    <Stack.Navigator
     initialRouteName="QRPayMent"
     >
<Stack.Screen name="QRPayMent" component={QRPayMent}
    options={{
     Title:'QRPayMent',
     headerShown:false
   }}
   ></Stack.Screen>
    </Stack.Navigator>
  )
}
// home của loading login
const StackLoading=()=>{
  return(
    <Stack.Navigator
     initialRouteName="Login"
     >
<Stack.Screen name="Login" component={Login}
    options={{
     Title:'Login ',
     headerShown:false
   }}
   ></Stack.Screen>
   <Stack.Screen name="SingUp" component={SingUp}
    options={{
     Title:'SingUp',
     headerShown:false
   }}
   ></Stack.Screen>
    <Stack.Screen name="Food" component={Food}
    options={{
     Title:'Food',
     headerShown:false
   }}
   ></Stack.Screen>
    <Stack.Screen name="Forgot" component={Forgot}
    options={{
     Title:'Forgot',
     headerShown:false
   }}
   ></Stack.Screen>
   <Stack.Screen name="ForgotPassWord" component={ForgotPassWord}
    options={{
     Title:'ForgotPassWord',
     headerShown:false
   }}
   ></Stack.Screen>
   <Stack.Screen name="PhoneBook" component={OTPPhonebook}
    options={{
     Title:'PhoneBook',
     headerShown:false
   }}
   ></Stack.Screen>
    </Stack.Navigator>
  )
}
const BottomTab=()=>{
  return(
   
<Tab.Navigator 
        initialRouteName="Account"
        activeColor="#09AB54"
        inactiveColor="#676767"
         shifting={false} barStyle={{backgroundColor:'#fff'}}>
     <Tab.Screen name="Home" component={Home} options={{tabBarIcon:({color})=>(
      <View style={{marginTop:-4}}>
      {
        color == "#09AB54" ? 
        <Image style={{width:30,height:30}} source={require('../img/icon/nav-home-active.jpg')}></Image>
         : 
         <Image style={{ width: 30, height: 30}} source={require('../img/icon/nav-home.jpg')}></Image>
         }
         </View>
        )}}></Tab.Screen>
     <Tab.Screen name="Activity" component={Activity}
     options={{
       tabBarIcon:({color})=>(
      <View style={{marginTop:-4}}>
      {
        color=="#09AB54"? 
        <Image style={{ width: 30, height: 30}} source={require('../img/icon/nav-activity-active.jpg')}></Image> 
            : 
            <Image style={{ width: 30, height: 30}} source={require('../img/icon/nav-activity.jpg')}></Image>}
        </View>
        ),}}
     ></Tab.Screen>
     <Tab.Screen name="Khám Phá" component={Payment}
     options={{tabBarIcon:({color})=>(
      <View style={{marginTop:-4}}>
      {
        color=="#09AB54"? 
        <Image style={{ width: 30, height: 30}} source={require('../img/icon/nav-payment-active.jpg')}></Image>
        :
        <Image style={{ width: 30, height: 30}} source={require('../img/icon/nav-payment.jpg')}></Image>
      }
        </View>
        ),}}
     ></Tab.Screen>
     <Tab.Screen name="Inbox" component={Inbox}
     
     options={{tabBarIcon:({color})=>(
      <View style={{marginTop:-4}}>
      {
        color=="#09AB54"?  
        <Image style={{ width: 30, height: 30}} source={require('../img/icon/nav-inbox-active.jpg')}></Image> 
        :
        <Image style={{ width: 30, height: 30}} source={require('../img/icon/nav-inbox.jpg')}></Image>}
        </View>
        ),tabBarBadge:5
        }}></Tab.Screen>
     <Tab.Screen name="Account" component={Account}
     options={{tabBarIcon:({color})=>(
      <View style={{marginTop:-4}}>
      {
        color=="#09AB54"?  
        <Image style={{ width: 30, height: 30}} source={require('../img/icon/nav-account-active.jpg')}></Image> 
        : 
        <Image style={{ width: 30, height: 30}} source={require('../img/icon/nav-account.jpg')}></Image>
      }
        </View>
        ),}}
     ></Tab.Screen>
   </Tab.Navigator>
  )
}
const DrawNavigator=()=>{
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>234234324324324</Text>
      <Text>234234324324324</Text>
    </View>
  )
}
export default function Router() {
  return (
   <NavigationContainer>
   <HomeStack></HomeStack>
   
   </NavigationContainer>
  
  );
}
