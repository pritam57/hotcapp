import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Image,
} from 'react-native';
import Data from "./Data";
import { useNavigation } from '@react-navigation/native';
import Entypo from "react-native-vector-icons/Entypo";

const Screen6 = () => {
    const windowHeight = Dimensions.get('window').height;
    var p = windowHeight / 2 - 80;
    const url = Data[1].img[0];
    // const image = { uri: url };
    const imageone = { uri: url };
    const navigation: any = useNavigation();

    const changescreen = (a: any) => {
        navigation.navigate('Screen8', { a: a });
        console.log("pressed");
    }

    const changescreenthree = () => {
        navigation.navigate('Screen2');
        console.log("pressed");
    }

    return (
        <ImageBackground source={imageone} resizeMode="cover" style={styles.image} >
            <View style={{ height: 40, width: 40, backgroundColor: "white", borderRadius: 100, alignItems: "center", justifyContent: "center", margin: 5, position: "absolute", zIndex: 1 }}>
                <TouchableOpacity onPress={() => changescreenthree()}>
                    <Entypo name="back" style={{ color: "black", fontSize: 30 }} />
                </TouchableOpacity>
            </View>
            <View style={{ height: 40, width: 40, backgroundColor: "white", borderRadius: 100, alignItems: "center", justifyContent: "center", position: "absolute", zIndex: 1, top: 0, right: 0, margin: 5 }}>
                <TouchableOpacity onPress={changescreenthree}>
                    <Entypo name="home" style={{ color: "black", fontSize: 30 }} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, marginTop: p }}>
                <ScrollView horizontal={true} style={{ width: "100%" }}>
                    <FlatList
                        data={Data}

                        renderItem={({ item, index }) => {
                            const a = item.img[0];
                            const image = { uri: a };
                            return (
                                <View style={styles.backgroundstyle} key={a}>
                                    <TouchableOpacity onPress={() => changescreen(item.type)}>
                                        <Image source={image} resizeMode="cover" style={{ height: 162, width: 146 }} />
                                        <Text style={{ fontWeight: "900", fontSize: 22, color: "white", justifyContent: "center", textAlign: "center", backgroundColor: "black", height: 35 }}>{item.type}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                        }
                        keyExtractor={item => item + "a"}
                        numColumns={4}
                        showsHorizontalScrollIndicator={false}
                    />
                </ScrollView>
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    backgroundstyle: {
        height: 200,
        width: 150,
        margin: 5,
        borderWidth: 2,
        borderColor: "white",
    },

    image: {
        flex: 1,
    }

});


export default Screen6;