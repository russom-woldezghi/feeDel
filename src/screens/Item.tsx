import React from 'react';
import { View, Button, ImageStyle, ViewStyle, Text } from 'react-native';
import Feedel from '../components/Feedel';

interface ItemProps {
    route: any; // Adjust type as per your navigation library
    navigation: any; // Adjust type as per your navigation library
    styles: {
        backButton: ViewStyle;
        flexOne: ViewStyle;
        imageScreenTwo: ImageStyle;
        letter: ViewStyle;
    };
}

const Item = ({ route, navigation, styles }: ItemProps) => {
    const { letter } = route.params;

    return (
        <View style={styles.flexOne}>
            {/* @todo replace with <Feedel></Feedel> */}
            <Text style={styles.letter}>{letter}</Text>
            <Button style={styles.backButton} title="go back" onPress={() => navigation.navigate('List')} />
            <Feedel style={styles.letter} item={{ title: letter }} onPress={() => {}} styles={styles.letter} />
    
        </View>
    );
};

export default Item;
