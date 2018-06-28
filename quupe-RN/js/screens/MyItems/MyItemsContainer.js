import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MyItems from './MyItems';

export class MyItemsContainer extends Component {
    render() {
        const userItems = this.props.navigation.state.params.userItems;
        const userInfo = this.props.navigation.state.params;
        return (
            <MyItems
                userItems={userItems}
                nav={this.props.navigation}
                fullname={userInfo.fullname}
                profileimage={userInfo.profileimage}
                id={userInfo.id}
            />
        );
    }
}
MyItemsContainer.propTypes = {
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired
};
export default MyItemsContainer;
