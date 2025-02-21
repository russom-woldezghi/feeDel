// navigation/index.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from '../screens/List';
import Item from '../screens/Item';
import { ViewStyle } from 'react-native';

const Stack = createNativeStackNavigator();

interface NavigationProps {
    DATA: Item[];
    styles: {
        flexOne: ViewStyle;
    };
}

const Navigation = ({ DATA, styles }: NavigationProps) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="List" options={{ headerShown: false }}>
                    {(props) => <List {...props} DATA={DATA} styles={styles} />}
                </Stack.Screen>
                <Stack.Screen name="Item" options={{ headerShown: false }}>
                    {(props) => <Item {...props} DATA={DATA} styles={styles} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
