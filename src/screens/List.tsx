import React from 'react';
import { View, FlatList, ListRenderItemInfo, TouchableWithoutFeedbackProps, ViewStyle } from 'react-native';
import Feedel from '../components/Feedel';

interface ListProps {
    navigation: any; // Adjust type as per your navigation library
    DATA: Feedel[];
    styles: {
        flexOne: ViewStyle;
        item: ViewStyle;
    };
}

interface ListItemWithParent {
    onPress: TouchableWithoutFeedbackProps['onPress'];
}

const List = ({ navigation, DATA, styles }: ListProps) => {
    const renderItem = ({ item }: ListRenderItemInfo<typeof Feedel>) => {
        return (
            <Feedel
                item={item}
                onPress={() => {
                    navigation.navigate('Item', {
                        letter: item.title
                    });
                }}
                styles={styles}
            />
        );
    };
    // const numberOfColumns = 7; // @todo determine column based on data/row.
    return (
        <View style={styles.flexOne}>
            <FlatList
                data={DATA}
                renderItem={(
                    item: Optional<ListItemWithParent<Item>, 'parentItem'>
                ) => {
                    return renderItem(item as ListItemWithParent<Item>);
                }}
                keyExtractor={(item) => item.id}
                numColumns={7}
            />
        </View>
    );
};

export default List;
