import React, { useEffect } from 'react';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import {View,Text,StyleSheet,Dimensions,StatusBar,TouchableOpacity,FlatList,Image} from 'react-native'

const PageScenesThere=()=>{
    return(
        <View
         style={styles.container}
        >
            <StatusBar style="auto"></StatusBar>
            <View>
                
            </View>
        </View>
    )
}
export default PageScenesThere
const styles=StyleSheet.create({
    container:{
        flex:1
    }
})