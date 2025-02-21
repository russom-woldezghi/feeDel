import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
    flexOne: ViewStyle;
    item: TextStyle;
    itemImage: ViewStyle;
    title: ViewStyle;
    imageScreenTwo: ViewStyle;
    letter: ViewStyle
}

export const styles = StyleSheet.create<Styles>({
    flexOne: {
        flex: 1,
    },
    item: {
        alignItems: 'center',
        width: 90,
        height: 100,
        marginVertical: 5,
        marginHorizontal: 5,
        overflow: 'hidden',
        fontFamily: 'NotoSerifEthiopic_Condensed-Bold',
    },
    itemImage: {
        width: '100%',
        maxHeight: 100,
        borderRadius: 10,
    },
    title: {
        fontSize: 45,
    },
    letter: {
        fontSize: 300,
        textAlign: 'center',
        fontFamily: 'NotoSerifEthiopic-Thin',
        fontWeight: 'thin',
        color: 'lightpink',
    },
    imageScreenTwo: {
        width: '100%',
        height: 200,
    },
    backButton: {
        flex: 1,
    },
});