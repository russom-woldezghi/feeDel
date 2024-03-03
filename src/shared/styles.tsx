import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
    flexOne: ViewStyle;
    item: ViewStyle;
    itemImage: ViewStyle;
    title: ViewStyle;
    imageScreenTwo: ViewStyle;
    letter: ViewStyle
}

export const styles = StyleSheet.create<Styles>({
    flexOne: {
        flex: 1
    },
    item: {
        alignItems: 'center',
        width: 90,
        height: 100,
        marginVertical: 5,
        marginHorizontal: 5,
        overflow: 'hidden',
    },
    itemImage: {
        width: '100%',
        maxHeight: 100,
        borderRadius: 10,
    },
    title: {
        fontSize: 55,
    },
    letter: {
        fontSize: 100,
        textAlign: 'center',
    },
    imageScreenTwo: {
        width: '100%',
        height: 200,
    },
});