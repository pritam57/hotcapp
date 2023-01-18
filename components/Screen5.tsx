import React, { useState, useEffect, useRef } from "react";
import { View, ImageBackground, Dimensions, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { useNavigation } from '@react-navigation/native';
import Data from "./Data";
import { UseSwipe } from "./Useswipe";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { any } from "list";
//import { any } from "list";

const Screen5 = (props: any) => {
    const type = props.route.params.type;
    const idno = props.route.params.imgidno;
    const [imageactive, setimageactive] = useState<number>(idno);
    const [show, setshow] = useState(true);
    const windowHeight = Dimensions.get('window').height;
    const windowidth = Dimensions.get('window').width;

    const navigation: any = useNavigation();

    const images = Data[type].img
    const cimage = Data[type].img[imageactive];
    const imageone = { uri: cimage };
    const lengthofimages = images.length-1;
    const [timer, setTimer] = useState(0);
    const [toggle, setToggle] = useState(false);

//   counter = setInterval(() => {if(imageactive===lengthofimages-1){ handleStop()}else{ {setimageactive(imageactive =>imageactive + 1)}}}, 1000);
    
function handleStop() {
    console.log("stopped")
    setToggle(false);
    setshow(true);
  }; 

  

  useEffect(() => {
    let counter:any;
    let y=imageactive;
    
    if (toggle) {
     counter=setInterval(()=>{
        if(y===lengthofimages){
            handleStop()
        }
        else{
            setimageactive(imageactive =>imageactive + 1);
            console.log(imageactive+ " imageactive");
            console.log(lengthofimages); 
            y=y+1;
            console.log(y);
        }
     },2000)
    }
    return () => {
      clearInterval(counter);
    };
  }, [toggle]);

   
  function handleStart (){
    setshow(false)
    setToggle(true);
  };

 

    const changescreen = (a: any) => {
        navigation.navigate('Screen4', { a: a });
        console.log("pressed");
    }

    const changescreenthree = () => {
        navigation.navigate('Screen3');
        console.log("pressed");
    }

    const { onTouchStart, onTouchEnd } = UseSwipe(onSwipeLeft, onSwipeRight, 6)

    function onSwipeRight() {
        console.log('SWIPE_LEFT');
        if (imageactive === 0) {
            setimageactive(0);
        }

        else {
            setimageactive(imageactive - 1);
        }
    }

    function onSwipeLeft() {
        console.log('SWIPE_RIGHT');
        if (imageactive === lengthofimages) {
            setimageactive(lengthofimages);
        }
        else {
            setimageactive(imageactive + 1);
        }
    }





    return (

        <ScrollView onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            {props.children}



            <TouchableOpacity >
                <ImageBackground resizeMode="contain" source={imageone} style={{ height: windowHeight, width: windowidth }} >

                    {show === true ? <View style={{ height: 40, width: 40, backgroundColor: "white", borderRadius: 100, alignItems: "center", justifyContent: "center", margin: 5 }}>
                        <TouchableOpacity onPress={() => changescreen(type)}>
                            <Entypo name="back" style={{ color: "black", fontSize: 30 }} />
                        </TouchableOpacity>
                    </View> : null}
                    {show === true ? <View style={{ height: 40, width: 40, backgroundColor: "white", borderRadius: 100, alignItems: "center", justifyContent: "center", position: "absolute", top: 0, right: 0, margin: 5 }}>
                        <TouchableOpacity onPress={changescreenthree}>
                            <Entypo name="home" style={{ color: "black", fontSize: 30 }} />
                        </TouchableOpacity>
                    </View> : null}
                    <View style={{ height: 40, width: 40, backgroundColor: "white", borderRadius: 100, alignItems: "center", justifyContent: "center", position: "absolute", bottom: 0, left: 0, margin: 5 }}>
                        {show === true ? <TouchableOpacity onPress={handleStart}>
                            <MaterialIcons name="slideshow" style={{ color: "black", fontSize: 30 }} />
                        </TouchableOpacity> :
                            <TouchableOpacity onPress={handleStop}>
                                <FontAwesome5 name="stop-circle" style={{ color: "black", fontSize: 30 }} />
                            </TouchableOpacity>}
                    </View>

                </ImageBackground>
            </TouchableOpacity>
        </ScrollView>

    )
}

export default Screen5;