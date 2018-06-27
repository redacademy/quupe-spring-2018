import React from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Calendar } from 'react-native-calendars';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Overlay from 'react-native-modal-overlay';
import Moment from 'moment';
import PropTypes from 'prop-types';
import styles from './styles';
import { formatCalendarData } from '../../lib/functions';

const itemBorrowedQuery = gql`
    query Item($id: ID!) {
        Item(id: $id) {
            allBorrowers {
                startDate
                endDate
            }
        }
    }
`;

const CalendarScreen = props => (
    <View style={styles.calendarScreen}>
        <View style={styles.fromToContainer}>
            <Button
                title={
                    props.fromDate === 'From'
                        ? 'From'
                        : Moment(props.fromDate).format('D MMM Y')
                }
                onPress={() => props.displayFromCalendar()}
            />
            <Button
                title={
                    props.toDate === 'To'
                        ? 'To'
                        : Moment(props.toDate).format('D MMM Y')
                }
                onPress={() => props.displayToCalendar()}
            />
        </View>
        <Icon
            name="ios-arrow-round-back"
            size={35}
            style={styles.backButton}
            color="black"
            onPress={() => props.navigation.pop()}
        />
        <Text style={styles.calendarTitle}>{props.title}</Text>
        <Query query={itemBorrowedQuery} variables={{ id: props.itemId }}>
            {({ loading, error, data }) => {
                if (loading) return <ActivityIndicator />;
                if (error) return <Text>Error</Text>;
                const calendarData = formatCalendarData(data.Item.allBorrowers);
                return (
                    <View>
                        {props.fromCalendar ? <Text>From</Text> : null}
                        {props.toCalendar ? <Text>To</Text> : null}
                        <Calendar
                            style={styles.calendar}
                            onDayPress={day => {
                                if (props.fromCalendar) {
                                    props.setFromDate(day.dateString);
                                } else if (props.toCalendar) {
                                    props.setToDate(day.dateString);
                                }
                            }}
                            minDate={new Date()}
                            markingType="basic"
                            markedDates={calendarData}
                        />
                    </View>
                );
            }}
        </Query>
        <TouchableOpacity
            disabled={!props.isCompleted}
            style={
                props.isCompleted ? styles.bookButton : styles.disabledButton
            }
            onPress={() => props.displayModal()}
        >
            <Text style={styles.bookItemText}>Book this item</Text>
        </TouchableOpacity>
        <Overlay
            visible={props.modalVisible}
            animationType="zoomIn"
            containerStyle={styles.overlay}
            animationDuration={500}
        >
            <Icon
                onPress={() => props.displayModal()}
                name="ios-close-circle"
                size={30}
                style={styles.closeButton}
            />
            <Text style={styles.overlayTitle}>Borrow Information</Text>
            <View style={styles.overlayDateContainer}>
                <Text>{Moment(props.fromDate).format('D MMM Y')}</Text>
                <Text>{Moment(props.toDate).format('D MMM Y')}</Text>
            </View>
            <Text style={styles.itemInfo}>Item Info</Text>
            <Text style={styles.itemText}>{props.title}</Text>
            <TouchableOpacity
                style={styles.confirmButton}
                onPress={() => {
                    props.createBorrowTransaction({
                        variables: {
                            endDate: Moment(props.toDate).format('MM/D/Y'),
                            startDate: Moment(props.fromDate).format('MM/D/Y'),
                            userIds: [props.currentUser],
                            itemIds: [props.itemId]
                        }
                    });
                    props.displayFinishedOverlay();
                }}
            >
                <Text style={styles.bookItemText}>Confirm</Text>
            </TouchableOpacity>
            {props.loading && <ActivityIndicator />}
            {props.error && (
                <Text>Sorry, there was an error processing the request.</Text>
            )}
        </Overlay>
        <Overlay
            visible={props.finishOverlayVisible}
            animationType="zoomIn"
            containerStyle={styles.overlay}
            animationDuration={500}
        >
            <Text>You are one step closer in saving the environment!</Text>
            <Text>
                Thank you for borrowing, your request has been sent to the
                lender.
            </Text>
            <TouchableOpacity
                onPress={() => {
                    props.displayFinishedOverlay();
                    props.navigation.navigate('Borrow');
                }}
            >
                <Text>Borrow More</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    props.displayFinishedOverlay();
                    props.navigation.navigate('Home');
                }}
            >
                <Text>Go Back Home</Text>
            </TouchableOpacity>
        </Overlay>
    </View>
);

CalendarScreen.defaultProps = {
    error: false
};

CalendarScreen.propTypes = {
    fromDate: PropTypes.string.isRequired,
    toDate: PropTypes.string.isRequired,
    displayFromCalendar: PropTypes.func.isRequired,
    displayToCalendar: PropTypes.func.isRequired,
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired,
    title: PropTypes.string.isRequired,
    fromCalendar: PropTypes.bool.isRequired,
    toCalendar: PropTypes.bool.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    setFromDate: PropTypes.func.isRequired,
    setToDate: PropTypes.func.isRequired,
    displayModal: PropTypes.func.isRequired,
    modalVisible: PropTypes.bool.isRequired,
    createBorrowTransaction: PropTypes.func.isRequired,
    displayFinishedOverlay: PropTypes.func.isRequired,
    currentUser: PropTypes.string.isRequired,
    itemId: PropTypes.string.isRequired,
    finishOverlayVisible: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool
};

export default CalendarScreen;
