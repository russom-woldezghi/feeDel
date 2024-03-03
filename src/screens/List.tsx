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

const List: React.FC<ListProps> = ({ navigation, DATA, styles }) => {
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

    return (
        <View style={styles.flexOne}>
            <FlatList
                data={DATA}
                renderItem={(parentItem: ListItemWithParent<Item>['parentItem']) => (
                    <FlatList
                        data={DATA}
                        renderItem={(
                            item: Optional<ListItemWithParent<Item>, 'parentItem'>
                        ) => {
                            item.parentItem = parentItem;
                            return renderItem(item as ListItemWithParent<Item>);
                        }}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                    />
                )}
            />
        </View>
    );
};

export default List;
