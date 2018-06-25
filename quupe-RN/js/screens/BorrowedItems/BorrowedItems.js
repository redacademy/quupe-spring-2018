import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

class BorrowedItems extends Component {
    render() {
        return (
            <ScrollView>
                {this.props.borrowed.map((item, index) => (
                    <TouchableOpacity key={item.item[0].id}>
                        <Image
                            key={item.item[0].image}
                            style={styles.image}
                            source={{ uri: item.item[0].image }}
                        />
                        <Text key={index}>{item.item[0].title}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        );
    }
}
BorrowedItems.propTypes = {
    nav: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    ).isRequired,
    borrowing: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
        .isRequired,
    borrowed: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
        .isRequired
};

export default BorrowedItems;
