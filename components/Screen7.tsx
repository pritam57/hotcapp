import React from "react";
import { View,Text,TouchableOpacity, Dimensions, StyleSheet,SafeAreaView,Animated, Image } from "react-native";

import Data from "./Data";
import Video from 'react-native-video';
//import VideoPlayer from 'react-native-video-controls';
import { useNavigation } from '@react-navigation/native';
import Entypo from "react-native-vector-icons/Entypo";


const Screen7 = (props:any) => {
  const type =  props.route.params.type;
  const idno=   props.route.params.imgidno;
  const cvideo=Data[type].videos[idno];
  const cthumb=Data[type].thumbnail[idno];

   // const url=Data[0].videos[0];
    const navigation: any = useNavigation();
    const windowHeight = Dimensions.get('window').height;
const windowidth = Dimensions.get('window').width;

const changescreenthree = () => {
  navigation.navigate('Screen8',type);
  console.log("pressed");
}

const changescreenfour = () => {
navigation.navigate('Screen2');
console.log("pressed");
}

    return(
     
      <View style={styles.container}>
        <View style={{ height: 40, width: 40, backgroundColor: "white", borderRadius: 100, alignItems: "center", justifyContent: "center", margin: 5, position: "absolute", zIndex: 1 }}>
                <TouchableOpacity onPress={() => changescreenthree()}>
                    <Entypo name="back" style={{ color: "black", fontSize: 30 }} />
                </TouchableOpacity>
            </View>
            <View style={{ height: 40, width: 40, backgroundColor: "white", borderRadius: 100, alignItems: "center", justifyContent: "center", position: "absolute", zIndex: 1, top: 0, right: 0, margin: 5 }}>
                <TouchableOpacity onPress={changescreenfour}>
                    <Entypo name="home" style={{ color: "black", fontSize: 30 }} />
                </TouchableOpacity>
            </View>
           
      <Video
        source={{
          uri:
           cvideo,
        }}
        style={styles.video}
        controls={true}
        resizeMode={'cover'}
        paused={true}
        
      />
    </View>
  
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
  },
  video: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * (9 / 16),
    backgroundColor: 'black',
  }
});
export default Screen7;

