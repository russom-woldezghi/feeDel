import React from 'react';
import { View, Button, Animated, ImageStyle, TextStyle, ViewStyle, Text } from 'react-native';
// import Feedel from '../components/Feedel';

interface ItemProps {
    route: any; // Adjust type as per your navigation library
    navigation: any; // Adjust type as per your navigation library
    styles: {
        flexOne: ViewStyle;
        imageScreenTwo: ImageStyle;
    };
    DATA: Feedel[];
}

const Item: React.FC<ItemProps> = ({ route, navigation, styles, DATA }) => {
    const { letter } = route.params;
    
    return (
        <View style={styles.flexOne}>
            <Text style={styles.letter}>{letter}</Text>
            <Button title="go back" onPress={() => navigation.navigate('List')} />
        </View>
    );
};

export default Item;
