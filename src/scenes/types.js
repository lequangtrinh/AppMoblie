import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Button,
  Text,
  StatusBar,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {LinearGradient} from 'expo-linear-gradient';
  const types =()=>{
    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);
    const openImagePickerAsync = async () => {
       
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          console.log(pickerResult)}; 
    
      return(
            <LinearGradient
            style={{flex:1}}
            colors ={[
              "#fc575e",
              "#f7b42c"
            ]}>
              <View style={{flex:1, justifyContent:'center',
                alignItems:'center' }}>
              <Image
              source = {
              require('../img/images/avatar-vo-danh.png')}
              style={{width:250, height:250, resizeMode: 'stretch'}}
              />
                <Button title="Upload image" 
                onPress={openImagePickerAsync}/>
              </View>
            </LinearGradient>
         
      )
    }

export default types;