import React from 'react';
import { TouchableOpacity, Text, Animated, ImageStyle, TextStyle, ViewStyle } from 'react-native';

interface FeedelProps {
    item: {
        title: string;
    }
    onPress: () => void;
    styles: {
        item: ViewStyle;
        itemImage: ImageStyle;
        letter: TextStyle;
    };
}

const Feedel: React.FC<FeedelProps> = ({ item, onPress, styles }) => (
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
);

export default Feedel;
