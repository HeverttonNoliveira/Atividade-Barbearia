import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default props => {
    return(
        <View style={style.Fundo}>
            <Image source={require('../Img/Logo.png')}/>
            <Text style={style.Title}>CutForU</Text>
            <Text style={style.FontPadrao}>Get the best Haircut Here</Text>

                <Pressable onPress={() => props.navigation.navigate('Home')} style={style.ButtonBook}>
                    <Text style={style.FontBook}>Book Now</Text>
                </Pressable>
                <Pressable onPress={() => props.navigation.navigate('Home')} style={style.ButtonLogin
                }>
                    <Text style={style.FontLogin}>Login</Text>
                </Pressable>
        </View>
    )
}

const style = StyleSheet.create(
    {
        Fundo:{
            flex: 1,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor: "#7972e9",
        },
        
        Title:{
            marginTop: 10,
            color: "white",
            fontSize: 32,
            fontWeight:"bold",
        },

        FontPadrao:{
            fontSize:18,
            color: "#fff"
        },

        FontBook:{
            fontSize: 18,
            fontWeight: "bold",
            color: "#7972e9",
        },

        FontLogin:{
            fontSize: 18,
            fontWeight: "bold",
            color: "#fff",
        },

        ButtonBook:{
            marginTop:18,
            alignItems:"center",
            width:250,
            padding: 16,
            borderRadius: 14,
            backgroundColor: "#fff"
        },

        ButtonLogin:{
            marginTop:18,
            alignItems:"center",
            width:250,
            padding: 16,
            borderRadius: 14,
            backgroundColor: "#7972e9",
            borderWidth: 1,
            borderColor: "#fff"
        }


    }
)