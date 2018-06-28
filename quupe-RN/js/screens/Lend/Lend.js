import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import LendForm from '../../components/LendForm';

const Lend = props => (
    <ScrollView>
        <LendForm navigation={props.navigation} />
    </ScrollView>
);

Lend.propTypes = {
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired
};

export default Lend;
