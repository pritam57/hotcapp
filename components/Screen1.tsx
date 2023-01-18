import React, { useState } from 'react';
import { Text, View } from "react-native";

export default function Screen1({ navigation }: any) {

  //  const [isload,setload]=useState(false);

  setTimeout(() => {

    // setload(true);
    navigation.navigate("Screen2");
  }, 5000);

  return (
    <View
      style={
        {
          flex: 1,
          alignItems: "center",
          // alignContent:"center",
          justifyContent: "center",
          backgroundColor: "#474747",
        }
      }>
      <Text style={{ fontSize: 50, color: "#D7BA54" }}>SPLASH SCREEN </Text>
    </View>
  )
}

