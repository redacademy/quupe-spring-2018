import React from 'react';
import { View, Text, ImageBackground, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CategoryItems = props => (
    <View style={styles.backgroundImage}>
        <TouchableHighlight
            onPress={() => props.nav.navigate('Item', { itemData: props.item })}
        >
            <ImageBackground
                source={{ uri: props.item.image }}
                style={styles.image}
                imageStyle={styles.image}
            >
                <Text style={styles.price}>${props.item.price}</Text>
            </ImageBackground>
        </TouchableHighlight>
        <Text style={styles.itemTitle}>{props.item.title}</Text>
    </View>
);

CategoryItems.propTypes = {
    nav: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired,
    item: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object
    ])).isRequired
};

export default CategoryItems;
