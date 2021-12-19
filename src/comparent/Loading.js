/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useRef, useEffect} from 'react';
 import {
   SafeAreaView,
   Text,
   View,
   StyleSheet,
   Animated,
 } from 'react-native';
 import { useNavigation } from '@react-navigation/native';
 import LottieView from 'lottie-react-native'
import { StatusBar } from 'expo-status-bar';
 const Loading=() => {
   const moveAnim = useRef(new Animated.Value(0)).current;
   const fadeAnim = useRef(new Animated.Value(0)).current;
   const navigation=useNavigation();
   const progress = useRef(new Animated.Value(0)).current;
   const switchToAuth = () => {
    navigation.navigate("Login")
  };
   useEffect(() => {
     Animated.sequence([
       Animated.timing(progress, {
         duration: 2000,
         toValue: 1,
         delay: 500,
         useNativeDriver: false,
       }),
     ]).start();
     Animated.spring(fadeAnim, {
       duration: 2000,
       toValue: 1,
       delay: 500,
       useNativeDriver: false,
     }).start(()=>{
       setTimeout(switchToAuth,3000)
     });
   },);
   return (
     <SafeAreaView style={styles.container}>
    
       <View style={styles.contentContainer}>
       <StatusBar style="auto"></StatusBar>
       <LottieView style={styles.image} progress={progress} source={require('../img/images/react-logo.json')} autoPlay loop={false} >
         
       </LottieView>
         
         <Animated.View style={[styles.logoContainer, {marginLeft: moveAnim}]}>
           <Text style={[styles.logoText]}>L</Text>
           <Animated.Text style={[styles.logoText, {opacity: fadeAnim}]}>
             oading...
           </Animated.Text>
         </Animated.View>
       </View>
     </SafeAreaView>
   );
 };
 
 export default Loading;
 
 export const styles = StyleSheet.create({
   container: {
     display: 'flex',
     flex: 1,
     backgroundColor: '#fff',
   },
   logoText: {
     fontSize: 35,
     marginTop: 20,
     color: "#00BFFF",
     fontWeight: '700',
   },
   contentContainer: {
     top: '20%',
     alignItems: 'center',
   },
   image: {
     width: 300,
     height: 300,
   },
   logoContainer: {
     flexDirection: 'row',
   },
 });
 