import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MyItems from './MyItems';

export class MyItemsContainer extends Component {
    render() {
        const userItems = this.props.navigation.state.params.userItems;
        return <MyItems userItems={userItems} nav={this.props.navigation} />;
    }
}
MyItemsContainer.propTypes = {
    navigation: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    ).isRequired
};
export default MyItemsContainer;
