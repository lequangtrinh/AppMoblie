import React, { useEffect } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native"
import QRCode from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/native';
const Account=()=>{
   
   
    return(
        <View style={{top:200,left:30,width:300,height:300}}>
            <QRCode 
      value={'https://www.youtube.com/watch?v=_ALV947SpPw'}
      logo={{uri: base64Logo}}
      size={200}
      logoSize={300}
      logoBackgroundColor='transparent'
    />
        </View>
    )
}
export default Account