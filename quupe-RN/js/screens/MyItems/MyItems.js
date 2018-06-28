import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image, TouchableOpacity, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const MyItems = props => (
    <ScrollView contentContainerStyle={styles.itemsContainer}>
        <Icon
            name="md-arrow-back"
            size={30}
            style={styles.backButton}
            color="black"
            onPress={() => props.nav.pop()}
        />
        <View style={styles.allItemsWrapped}>
            {props.userItems.map(item => (
                <TouchableOpacity
                    style={styles.item}
                    key={item.id}
                    onPress={() => {
                        props.nav.navigate('Item', {
                            itemData: item
                        });
                    }}
                >
                    <Image
                        style={styles.image}
                        source={{ uri: item.image }}
                        key={item.image}
                    />
                    <TouchableOpacity style={styles.edit}>
                        <Text>Edit</Text>
                    </TouchableOpacity>
                    <Text key={item.price} style={styles.price}>
                        {item.price}
                    </Text>
                    <Text key={item.title}>{item.title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    </ScrollView>
);
MyItems.propTypes = {
    nav: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired,
    userItems: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default MyItems;
