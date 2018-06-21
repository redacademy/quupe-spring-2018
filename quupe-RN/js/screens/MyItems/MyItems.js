import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

const MyItems = props => {
    return (
        <ScrollView contentContainerStyle={styles.itemsContainer}>
            {props.userItems.map((item, index) => (
                <TouchableOpacity style={styles.item} key={index}>
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
        </ScrollView>
    );
};
MyItems.propTypes = {
    nav: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    ).isRequired,
    userItems: PropTypes.array.isRequired
};
export default MyItems;
