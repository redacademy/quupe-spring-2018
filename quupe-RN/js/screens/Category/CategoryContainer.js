import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';

import Category from './Category';
import styles from './styles';

class CategoryContainer extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.dimension}>
                    <Category nav={this.props.navigation} />
                </View>
            </ScrollView>
        );
    }
}

CategoryContainer.propTypes = {
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired
};

export default CategoryContainer;
