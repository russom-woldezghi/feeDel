import React from 'react';
import { TouchableOpacity, Text, Animated, ImageStyle, TextStyle, ViewStyle } from 'react-native';

interface FeedelProps {
    item: {
        title: string;
    }
    onPress: () => void;
    styles: {
        title: TextStyle;
        item: ViewStyle;
        itemImage: ImageStyle;
        letter: TextStyle;
    };
}

const Feedel = ({ item, onPress, styles }: FeedelProps) => (
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>Feedel</Text>
    </TouchableOpacity>
);

export default Feedel;
