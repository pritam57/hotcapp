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
    TouchableOpacity
} from 'react-native';
import Data from "./Data";
import { useNavigation } from '@react-navigation/native';
import Entypo from "react-native-vector-icons/Entypo";

const Screen3 = () => {
    const windowHeight = Dimensions.get('window').height;
    var p = windowHeight / 2 - 75;
    const url = Data[1].img[0];
    const image = { uri: url };
    const imageone = { uri: url };
    const navigation: any = useNavigation();

    const changescreen = (a: any) => {
        navigation.navigate('Screen4', { a: a });
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
                                <ImageBackground source={image} resizeMode="cover" style={styles.backgroundstyle}>
                                    <View style={{ height: 200, width: 150 }} key={item + "a"}>
                                        <TouchableOpacity onPress={() => changescreen(item.type)}>
                                            <Text style={{ fontWeight: "900", fontSize: 25, color: "white", height: 320, width: 130, textAlign: "center", textAlignVertical: "center" }}>{item.type}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </ImageBackground>
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
        margin: 5,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 5
    },

    sectionContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    image: {
        flex: 1,
    }

});

export default Screen3;

