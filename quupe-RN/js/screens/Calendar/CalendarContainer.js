import React, { Component } from 'react';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import {
    displayFromCalendar,
    displayToCalendar,
    setFromDate,
    setToDate,
    displayModal,
    displayFinishedOverlay
} from '../../redux/modules/BorrowItem';
import Calendar from './Calender';

const borrowItemMutation = gql`
    mutation createBorrowTransactions(
        $endDate: String!
        $startDate: String!
        $userIds: [ID!]
        $itemIds: [ID!]
    ) {
        createBorrowTransactions(
            endDate: $endDate
            startDate: $startDate
            userIds: $userIds
            itemIds: $itemIds
        ) {
            user {
                id
                fullname
            }
            item {
                id
                title
            }
            startDate
            endDate
        }
    }
`;

class CalendarContainer extends Component {
    setFromDate(date) {
        this.props.dispatch(setFromDate(date));
    }

    setToDate(date) {
        this.props.dispatch(setToDate(date));
    }

    displayFromCalendar() {
        this.props.dispatch(displayFromCalendar());
    }

    displayToCalendar() {
        this.props.dispatch(displayToCalendar());
    }

    displayModal() {
        this.props.dispatch(displayModal());
    }

    displayFinishedOverlay() {
        this.props.dispatch(displayFinishedOverlay());
    }

    render() {
        const { itemId, title } = this.props.navigation.state.params;
        const currentUserId = Array.from(this.props.token)[0].id;
        const isCompleted =
            this.props.calendarData.fromDate !== 'From' &&
            this.props.calendarData.toDate !== 'To' &&
            this.props.calendarData.toDate >= this.props.calendarData.fromDate;

        return (
            <Mutation mutation={borrowItemMutation}>
                {(createBorrowTransaction, { loading, error }) => (
                    <Calendar
                        itemId={itemId}
                        title={title}
                        navigation={this.props.navigation}
                        fromDate={this.props.calendarData.fromDate}
                        toDate={this.props.calendarData.toDate}
                        fromCalendar={this.props.calendarData.fromCalendar}
                        toCalendar={this.props.calendarData.toCalendar}
                        displayFromCalendar={this.displayFromCalendar.bind(this)}
                        displayToCalendar={this.displayToCalendar.bind(this)}
                        setFromDate={this.setFromDate.bind(this)}
                        setToDate={this.setToDate.bind(this)}
                        displayModal={this.displayModal.bind(this)}
                        modalVisible={this.props.calendarData.modalVisible}
                        createBorrowTransaction={createBorrowTransaction}
                        currentUser={currentUserId}
                        displayFinishedOverlay={this.displayFinishedOverlay.bind(this)}
                        finishOverlayVisible={
                            this.props.calendarData.finishOverlay
                        }
                        isCompleted={isCompleted}
                        loading={loading}
                        error={error}
                    />
                )}
            </Mutation>
        );
    }
}

CalendarContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired,
    token: PropTypes.objectOf(PropTypes.object).isRequired,
    calendarData: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool])).isRequired
};

export default connect(state => ({
    calendarData: state.BorrowItem,
    token: state.Token.token
}))(CalendarContainer);
