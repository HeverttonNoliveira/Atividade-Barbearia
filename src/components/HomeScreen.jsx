import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import CardAssessment from "./cards/cardAssessment";

export default props => {
    return (
        <View style={style.Fundo}>

            <View style={style.Header}>
                <Text style={style.Font}>HOME</Text>
                <Text style={style.Font}>SERVICES</Text>
                <Text style={style.Font}>PROMO</Text>
                <Text style={style.Font}>HELP</Text>
            </View>

            <View style={style.Card}>
                <Text style={style.Font}>HELLO ABIGAIL COREL</Text>
                <View style={style.CardUser}>
                    <Image style={style.Image}
                        source={require('../Img/user.png')} />
                    <View style={style.CardBody}>
                        <Text>YOUR BALACE</Text>
                        <Text style={style.FontCard}>$125</Text>
                    </View>
                </View>
            </View>

            <View style={{ flex: 1, backgroundColor: "#FFF", borderTopLeftRadius: 32, borderTopRightRadius: 32 }}>
                <View style={{flexDirection:"row", justifyContent:"space-evenly", marginTop:40}}>
                    <Text style={style.FontAssessment}>ALL</Text>
                    <Text style={style.FontAssessment}>POPULAR</Text>
                    <Text style={style.FontAssessment}>NEAR ME</Text>
                    <Text style={style.FontAssessment}>PRICE</Text>
                </View>

                <View style={style.CardSalon}>
                    <CardAssessment 
                    Title="John's Barber" 
                    iconName="star" 
                    iconStarSize={16}
                    iconSize={32}
                    iconColor="#ebb151"
                    iconBookColor="#7972e9"
                    number="0.5 Km"
                    additionalIconName="bookmark"
                    onPress={() => props.navigation.navigate('Details')}
                    />
                    
                    <CardAssessment 
                    Title="RealMan Barber" 
                    iconName="star" 
                    iconStarSize={16}
                    iconSize={32}
                    iconColor="#ebb151"
                    iconBookColor="grey"
                    number="1.2 Km"
                    additionalIconName="bookmark-outline"
                    />

                    <CardAssessment 
                    Title="Razor Baber" 
                    iconName="star" 
                    iconStarSize={16}
                    iconSize={32}
                    iconColor="#ebb151"
                    iconBookColor="grey"
                    number="1.8 Km"
                    additionalIconName="bookmark-outline"
                    />

                    <CardAssessment 
                    Title="Baptiste Barber" 
                    iconName="star" 
                    iconStarSize={16}
                    iconSize={32}
                    iconColor="#ebb151"
                    iconBookColor="grey"
                    number="0.5 Km"
                    additionalIconName="bookmark-outline"
                    />
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create(
    {
        Fundo: {
            flex: 1,
            justifyContent: "flex-start",
            backgroundColor: "#7972e9",
            width: "100%"
        },

        Header: {
            padding: 24,
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
        },

        Font: {
            color: "#FFF",
            fontSize: 14,
            marginBottom: 4,
            fontWeight:"bold"
        },

        FontAssessment: {
            fontWeight:"bold",
            color:"#7972e9",
        },
        
        FontCard: {
            fontSize: 32,
            color: "#7972e9",
            fontWeight: "bold"
        },

        Card: {
            justifyContent: "space-evenly",
            padding: 24,
        },

        CardUser: {
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "white",
            padding: 18,
            borderRadius: 16,
            width: "100%"
        },

        CardBody: {
            justifyContent: "center",
            alignItems: "center",
        },

        CardSalon:{
            marginTop:16,
            padding:24,
            justifyContent:"space-around",
            height:"100%"
        },

        Image: {
            width: 80,
            height: 80,
        },
    }
)