import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import styles from './styles';

const BorrowedItems = props => {
    return (
        <ScrollView>
            <Icon
                name="md-arrow-back"
                size={30}
                style={styles.backButton}
                color="black"
                onPress={() => props.nav.pop()}
            />
            <Text>Currently Borrowing</Text>
            {props.borrowing.map((item, index) => (
                <TouchableOpacity
                    key={item.item[0].id}
                    style={styles.itemPanel}
                >
                    <Image
                        key={item.item[0].image}
                        style={styles.image}
                        source={{ uri: item.item[0].image }}
                    />
                    <Text key={index}>{item.item[0].title}</Text>
                    <Text key={item.item[0].price}>
                        {item.item[0].price *
                            moment(item.endDate)
                                .subtract(item.startDate)
                                .format('d')}
                    </Text>
                </TouchableOpacity>
            ))}
            <Text>Borrowed</Text>
            {props.borrowed.map((item, index) => (
                <TouchableOpacity
                    key={item.item[0].id}
                    style={styles.itemPanel}
                >
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
};

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
