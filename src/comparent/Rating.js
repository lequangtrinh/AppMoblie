
import React,{useState} from 'react';
import { View,Text,StyleSheet, Modal,RegisterLayout,TextInput,Button,TouchableOpacity, Image, Alert, ToastAndroid} from 'react-native';
const Rating=()=>{
    const[defaultRating,setDefaultRating]=useState(3)
    const[maxRating,setMaxRating]=useState([1,2,3,4,5])
    const StarImgFitter='https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
    const StarImgConner='https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'
    const CustomRatingBar=()=>{
        return(
            <View style={styles.CustomRatingBarStyle}>
                {
                    maxRating.map((item,key)=>{
                        return(
                            <TouchableOpacity activeOpacity={0.6} key={item} onPress={()=>setDefaultRating(item)}>
                                <Image style={styles.img}
                                source={item <=defaultRating?{uri:StarImgFitter}:{uri:StarImgConner}}
                                >
                                </Image>
                            </TouchableOpacity>
                        )
                    }
                    )
                }
            </View>
        )
    }
    return(
    <CustomRatingBar/>
    )
}
const styles = StyleSheet.create({
    CustomRatingBarStyle:{
      marginHorizontal:10,
        flexDirection:'row',
        marginTop:5,
    },
    img:{
        width:15,
        height:15,
        resizeMode:'cover',
        tintColor:'#000000'
    },
})  
export default Rating