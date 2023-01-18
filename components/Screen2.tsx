import React,{useState} from "react";
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Data from "./Data";

const Screen2 = () => {
    const navigation: any = useNavigation();
    const url=Data[1].img[0];
    const image = { uri: url };

    const changescreen = () => {
        navigation.navigate('Screen3');
       
    }
   
    const changevideoscreen = () => {
        navigation.navigate('Screen6');    
    }
   
    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image} >
            <View style={styles.sectionContainer}>

                <View>
                    <Text style={styles.headingstyle} >SOBIA & ZOHAIB</Text>
                </View>
                <TouchableOpacity onPress={changescreen}>
                    <Text style={styles.textstyle}>PHOTOS</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={changevideoscreen}>
                <Text style={styles.textstyle}>VIDEOS</Text>
                </TouchableOpacity>
                
   
            </View>
        </ImageBackground>
    )
}



const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },

    headingstyle:{
        fontWeight:"600",
        fontSize:45,
        color:"white",
        marginBottom:20
    },
    textstyle: {
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        margin: 20,
        fontWeight: "600",
        fontSize:22,
       color:"white",
       height:60,
       width:150,
       textAlign:"center",
       justifyContent:"center",
    },
    image: {
        flex: 1,
    },
});
export default Screen2;