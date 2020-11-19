import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Main from './Main';
import About from './About';
import Map from './Components/Map';

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="About"
                    component={About}
                    options={{ headerShown: false }}

                />
                <Stack.Screen
                    name="Map"
                    component={Map}
                    options={{ headerShown: true }}

                />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Router;