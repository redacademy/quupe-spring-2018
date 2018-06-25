import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

const LentItems = props => {
    return (
        <View>
            <Text> LentItems </Text>
        </View>
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
