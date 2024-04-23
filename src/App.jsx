import 'react-native-gesture-handler';
import React from "react";
import { SafeAreaView} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './components/HomeScreen';
import SplashScreen from './components/SplashScreen';
import DetailsScreen from './components/DetailsScreen';
import cardAssessment from './components/cards/cardAssessment';

const Drawer = createDrawerNavigator();
export default props => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName='Details'>
                    <Drawer.Screen name='Splash' component={SplashScreen} options={
                        {
                            headerShadowVisible: false,
                            headerStyle: { backgroundColor: "#7972e9" },
                            title:"Splash",
                            headerTitle: "",
                            headerTintColor:"#fff",
                        }
                    } />
                    <Drawer.Screen name='Home' component={HomeScreen} options={
                        {
                            headerShadowVisible: false,
                            headerStyle: { backgroundColor: "#7972e9" },
                            title:"Home",
                            headerTitle: "",
                            headerTintColor:"#fff",
                        }
                    } />
                    <Drawer.Screen name='Details' component={DetailsScreen}  options={
                        {
                            headerShadowVisible: false,
                            headerStyle: { backgroundColor: "#7972e9" },
                            title:"Details",
                            headerTitle: "",
                            headerTintColor:"#fff",
                        }
                    } />
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}
''