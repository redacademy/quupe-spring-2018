import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const LentItems = props => {
    return (
        <ScrollView>
            <Icon
                name="md-arrow-back"
                size={30}
                style={styles.backButton}
                color="black"
                onPress={() => props.nav.pop()}
            />
            <View style={styles.borrowing}>
                <Text style={styles.currentlyLending}> currently lending </Text>
                {props.activeLentItems.map(item => (
                    <TouchableOpacity
                        key={item.allBorrowers[0].id}
                        style={styles.itemPanel}
                    >
                        <Text>{item.title}</Text>
                        <Image
                            style={styles.image}
                            source={{ uri: item.image }}
                        />
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.borrowing}>
                <Text> lent </Text>
                {props.expiredLentItems.map(item => (
                    <TouchableOpacity
                        key={item.allBorrowers[0].id}
                        style={styles.itemPanel}
                    >
                        <Text>{item.title}</Text>
                        <Image
                            style={styles.image}
                            source={{ uri: item.image }}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

LentItems.propTypes = {
    nav: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    ).isRequired,
    activeLentItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
        .isRequired,
    expiredLentItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
        .isRequired
};
export default LentItems;
