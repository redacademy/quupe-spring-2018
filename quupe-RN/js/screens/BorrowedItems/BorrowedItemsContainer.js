import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import BorrowedItems from './BorrowedItems';

const newDay = moment()
    .startOf('day')
    .format();

export class BorrowedItemsContainer extends Component {
    render() {
        const borrowedHistory = [];
        const borrowing = [];
        this.props.navigation.state.params.borrowed.map(item => {
            const itemExpiry = moment(
                item.endDate,
                'MM/DD/YYYY',
                true
            ).format();

            if (itemExpiry < newDay) {
                borrowedHistory.push(item);
            } else {
                borrowing.push(item);
            }
        });

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
