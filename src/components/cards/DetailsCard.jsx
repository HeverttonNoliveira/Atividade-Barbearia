import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default props => {
    return (
        <View>
            <View style={{padding:24}}>
                <Text style={
                    {
                        fontSize:24,
                        fontWeight:"bold",
                        color:"#fff"
                    }
                }>{props.NameSalon}</Text>
                
                <View style={{ flexDirection: "row", justifyContent:"space-between"}}>
                    <View style={{ flexDirection: "row" }}>
                        <Icon name={props.iconName} size={props.iconStarSize} color={props.iconColor} />
                        <Icon name={props.iconName} size={props.iconStarSize} color={props.iconColor} />
                        <Icon name={props.iconName} size={props.iconStarSize} color={props.iconColor} />
                        <Icon name={props.iconName} size={props.iconStarSize} color={props.iconColor} />
                        <Icon name={props.iconName} size={props.iconStarSize} color={props.iconColor} />
                    </View>

                    <View>
                        <Text style={
                            {
                                fontWeight:"bold",
                                color:"#f1f1f1"
                            }
                        }>{props.endereco}</Text>
                    </View>
                </View>

            </View>

        </View>
    )
}

const style = StyleSheet.create(
    {
        
    }
)