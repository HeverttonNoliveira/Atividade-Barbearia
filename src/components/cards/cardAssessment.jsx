import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default props => {
    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                <View>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        color: "#000",
                    }}>{props.Title}</Text>

                    <View style={{ flexDirection: "row" }}>
                        {/* Aqui você passa as propriedades individualmente para cada ícone */}
                        <Icon name={props.iconName} size={props.iconStarSize} color={props.iconColor} />
                        <Icon name={props.iconName} size={props.iconStarSize} color={props.iconColor} />
                        <Icon name={props.iconName} size={props.iconStarSize} color={props.iconColor} />
                        <Icon name={props.iconName} size={props.iconStarSize} color={props.iconColor} />
                        <Icon name={props.iconName} size={props.iconStarSize} color={props.iconColor} />
                    </View>
                    <Text>{props.number}</Text>
                </View>

                <View>
                    {/* Icone adicional com propriedades separadas */}
                    <Icon style={{ marginLeft: 100, marginBottom: 8 }} 
                    name={props.additionalIconName} size={props.iconSize} color={props.iconBookColor} />
                    <Pressable onPress={props.onPress} style={styles.ButtonLogin}>
                        <Text style={{ color: "#fff" }}>More Details</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ButtonLogin: {
        alignItems: "center",
        padding: 8,
        borderRadius: 8,
        backgroundColor: "#7972e9",
        borderWidth: 1,
        borderColor: "#fff"
    }
});
