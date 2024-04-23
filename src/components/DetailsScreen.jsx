import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import DetailsCard from "./cards/DetailsCard";

export default props => {
    return (
        <View style={style.Fundo}>
            <DetailsCard
            NameSalon="John's Barber"
            iconName="star"
            iconStarSize={16}
            iconColor="#ebb151"
            endereco="237 E STH STREET, NTC"
            />

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
    }
)