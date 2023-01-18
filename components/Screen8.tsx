import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Data from './Data';
import Foundation from "react-native-vector-icons/Foundation"
import { useNavigation } from '@react-navigation/native';
import Entypo from "react-native-vector-icons/Entypo";

const Screen8 = (props: any) => {

  const windowHeight = Dimensions.get('window').height;
  const windowidth = Dimensions.get('window').width;
  const eone = props.route.params.a;
  const navigation: any = useNavigation();

  console.log(typeof (eone) + "     ............");
  var ab = 0;
  if (typeof (eone) === "number") {
    ab = eone;
  }
  else {
    Data.map((a: any, b: any) => { if (Data[b].type === eone) { ab = b } });
  }


  const changescreenthree = () => {
    navigation.navigate('Screen6');
    console.log("pressed");
  }

  const changescreenfour = () => {
    navigation.navigate('Screen2');
    console.log("pressed");
  }

  return (
    <ScrollView >
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
      <View style={{ display: 'flex', flexDirection: "column", width: "98%" }}>
        {Data[ab].videos.map((a: any, b: any) => {
          return (
            <TouchableOpacity key={a + b} onPress={() => props.navigation.navigate('Screen7', { type: ab, imgidno: b })}>
              <View style={{ height: 50, width: 60, backgroundColor: "white", borderRadius: 100, alignItems: "center", justifyContent: "center", margin: 5, position: 'absolute', zIndex: 1, alignSelf: "center", marginTop: 110 }}>

                <Foundation name="play-video" style={{ color: "black", fontSize: 40 }} />

              </View>
              <Image source={{
                uri: Data[ab].thumbnail[b],
              }} style={{ height: windowHeight / 3, width: "100%", borderRadius: 10, margin: 5 }} />
            </TouchableOpacity>
          )
        })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  cblock: {

    height: 100,
    width: 58,
    borderColor: "green",
    borderRadius: 20,
    borderWidth: 2.5,
    margin: 10,

  },
  backgroundstyle: {
    margin: 5,
    borderWidth: 2,
    borderColor: "green",
    flexWrap: "wrap",
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  tinyLogo: {

    width: 150,
    height: 200,
    margin: 10
  },
  flat: {
    display: 'flex',
    flexDirection: "column",
    flexWrap: "wrap",
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default Screen8;