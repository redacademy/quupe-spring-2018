import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import BorrowedItems from './BorrowedItems';

const startOfToday = moment()
    .startOf('day')
    .format();

export class BorrowedItemsContainer extends Component {
    render() {
        const borrowedHistory = this.props.navigation.state.params.borrowed.filter(
            item => {
                const itemExpiry = moment(
                    item.endDate,
                    'MM/DD/YYYY',
                    true
                ).format();
                return itemExpiry < startOfToday;
            }
        );
        const borrowing = this.props.navigation.state.params.borrowed.filter(
            item => {
                const itemExpiry = moment(
                    item.endDate,
                    'MM/DD/YYYY',
                    true
                ).format();
                return itemExpiry > startOfToday;
            }
        );

        return (
            <BorrowedItems
                borrowed={borrowedHistory}
                borrowing={borrowing}
                nav={this.props.navigation}
            />
        );
    }
}
BorrowedItemsContainer.propTypes = {
    navigation: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    ).isRequired
};

export default BorrowedItemsContainer;
