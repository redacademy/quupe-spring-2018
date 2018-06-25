import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';
import Overlay from 'react-native-modal-overlay';
import { Form, Field } from 'react-final-form';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Map from '../../components/Map';
import { displayMessageOverlay } from '../../redux/modules/BorrowItem';

const SingleItem = props => (
    <View>
        <Image source={{ uri: props.item.image }} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{props.item.title}</Text>
        <View style={styles.pricing}>
            <Text style={styles.pricingText}>
                <Text style={styles.price}>${props.item.price}</Text> per day
            </Text>
            <Text style={styles.pricingText}>
                <Text style={styles.price}>${props.item.priceOneWeek}</Text> per
                week
            </Text>
            <Text style={styles.pricingText}>
                <Text style={styles.price}>${props.item.priceOneMonth}</Text>{' '}
                per month
            </Text>
        </View>
        <View style={styles.tabs}>
            <TouchableOpacity
                style={
                    props.currentTab === 'Lender Info'
                        ? styles.currentTabButton
                        : styles.tabButton
                }
                title="Lender Info"
                onPress={() => props.changeTab('Lender Info')}
            >
                <Text style={styles.tabText}>Lender Info</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={
                    props.currentTab === 'Details'
                        ? styles.currentTabButton
                        : styles.tabButton
                }
                title="Details"
                onPress={() => props.changeTab('Details')}
            >
                <Text style={styles.tabText}>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={
                    props.currentTab === 'Location'
                        ? styles.currentTabButton
                        : styles.tabButton
                }
                title="Location"
                onPress={() => props.changeTab('Location')}
            >
                <Text style={styles.tabText}>Location</Text>
            </TouchableOpacity>
        </View>
        {props.currentTab === 'Lender Info' && (
            <View style={styles.tabInfo}>
                <View style={styles.profileInfo}>
                    <Image
                        source={{ uri: props.item.owner.profileImage }}
                        style={styles.profileImage}
                    />
                    <Text>{props.item.owner.fullname}</Text>
                </View>
                <TouchableOpacity
                    style={styles.sendMessage}
                    // TODO: open up a pop up to display messages and wrap in mutation to send the message
                    onPress={() => props.dispatch(displayMessageOverlay())}
                >
                    <Text style={styles.messageText}>Send Message</Text>
                </TouchableOpacity>
            </View>
        )}
        {props.currentTab === 'Details' && (
            <View style={styles.tabInfo}>
                <View style={styles.tagList}>
                    <Text style={styles.itemTags}>{props.item.category}</Text>
                    <Text style={styles.itemTags}>{props.item.year}</Text>
                    <Text style={styles.itemTags}>{props.item.condition}</Text>
                </View>
                <Text style={styles.description}>{props.item.description}</Text>
            </View>
        )}
        {props.currentTab === 'Location' && (
            <View style={styles.locationView}>
                <Map
                    latitude={props.item.latitude}
                    longitude={props.item.longitude}
                />
            </View>
        )}
        <Overlay
            visible={props.messageOverlay}
            animationType="zoomIn"
            containerStyle={styles.overlay}
            animationDuration={500}
        >
            <Icon
                onPress={() => props.dispatch(displayMessageOverlay())}
                name="ios-close-circle"
                size={30}
                style={styles.closeButton}
            />
            <View style={styles.profileInfo}>
                <Image
                    source={{ uri: props.item.owner.profileImage }}
                    style={styles.profileImage}
                />
                <Text>{props.item.owner.fullname}</Text>
            </View>
            <Form
                onSubmit={values => {
                    props.createRoom({
                        variables: {
                            peopleIds: [
                                props.currentUserId,
                                props.item.owner.id
                            ],
                            messages: {
                                text: values.message,
                                sentByIds: props.currentUserId
                            }
                        }
                    });
                    props.dispatch(displayMessageOverlay());
                    props.displaySentMessage();
                }}
                render={({ handleSubmit }) => (
                    <View style={styles.messageContainer}>
                        <Field
                            name="message"
                            render={({ input }) => (
                                <TextInput
                                    {...input}
                                    placeholder="Write your message here"
                                    style={styles.messageInput}
                                    multiline
                                />
                            )}
                        />
                        <TouchableOpacity
                            onPress={handleSubmit}
                            style={styles.sendMessageButton}
                        >
                            <Text style={styles.messageText}>Send Message</Text>
                        </TouchableOpacity>
                        {props.loading && <ActivityIndicator />}
                        {props.error && (
                            <Text>
                                There was an error sending your message.
                            </Text>
                        )}
                    </View>
                )}
            />
        </Overlay>
        <Overlay
            visible={props.sentMessage}
            animationType="zoomIn"
            containerStyle={styles.overlay}
            animationDuration={500}
        >
            <Icon
                onPress={() => props.displaySentMessage()}
                name="ios-close-circle"
                size={30}
                style={styles.closeButton}
            />
            <Text>Thanks for sending the message!</Text>
        </Overlay>
        <TouchableOpacity
            style={styles.bookItem}
            onPress={() =>
                props.navigation.navigate('Calendar', {
                    itemId: props.item.id,
                    title: props.item.title
                })
            }
        >
            <Text style={styles.bookText}>Book this item</Text>
        </TouchableOpacity>
    </View>
);

SingleItem.defaultProps = {
    error: false
};

SingleItem.propTypes = {
    item: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.number
    ])).isRequired,
    currentTab: PropTypes.string.isRequired,
    changeTab: PropTypes.func.isRequired,
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired,
    dispatch: PropTypes.func.isRequired,
    messageOverlay: PropTypes.bool.isRequired,
    createRoom: PropTypes.func.isRequired,
    displaySentMessage: PropTypes.func.isRequired,
    currentUserId: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool,
    sentMessage: PropTypes.bool.isRequired
};

export default SingleItem;
