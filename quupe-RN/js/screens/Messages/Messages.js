import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Button,
    Image
} from 'react-native';
import { graphql, Mutation, Subscription } from 'react-apollo';
import gql from 'graphql-tag';
import { Form, Field } from 'react-final-form';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { assetColors, assetTypography } from '../../assets/styles';
import moment from 'moment';

// do mutation for time
const createMessages = gql`
    mutation($sentByIds: [ID!], $text: String!, $roomidId: ID) {
        createMessages(
            sentByIds: $sentByIds
            text: $text
            roomidId: $roomidId
        ) {
            id
            text
        }
    }
`;

const messageSubscription = gql`
    subscription {
        Messages {
            mutation
            node {
                roomid {
                    people {
                        id
                        fullname
                    }
                    messages {
                        text
                        sentBy {
                            fullname
                            profileimage
                        }
                    }
                }
            }
        }
    }
`;

const date = new Date();

const Messages = ({
    messageData,
    navigation,
    currentUser,
    updateUser,
    updateMessage,
    updateRoom
}) => (
    <View style={{ backgroundColor: 'white' }}>
        <View style={styles.topNavContainer}>
            <Ionicons
                size={30}
                name="md-arrow-back"
                onPress={() => {
                    navigation.dispatch(NavigationActions.back());
                }}
            />
            <Text style={styles.navText}>{messageData.people[1].fullname}</Text>
        </View>
        <ScrollView
            style={{
                borderWidth: 1.2,
                width: '95%',
                height: 430,
                marginLeft: 7,
                marginTop: 10,
                borderRadius: 10
            }}
        >
            <Subscription subscription={messageSubscription}>
                {({ data, loading }) => (
                    <ScrollView>
                        {!data
                            ? messageData.messages.map((message, index) => (
                                <View
                                    key={index}
                                    style={{
                                        flexDirection: 'row',
                                        marginTop: 20,
                                        alignItems: 'center',
                                        marginBottom: 10
                                    }}
                                >
                                    <Image
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 25,
                                            marginLeft: 10
                                        }}
                                        source={{
                                            uri:
                                                  message.sentBy[0].profileimage
                                        }}
                                    />
                                    <Text
                                        style={{
                                            width: 175,
                                            marginLeft: 15,
                                            borderWidth: 1,
                                            borderColor: assetColors.darkBlue,
                                            borderRadius: 6,
                                            padding: 5
                                        }}
                                    >
                                        {message.text}
                                    </Text>
                                </View>
                            ))
                            : data &&
                              data.Messages.node.roomid.messages.map((message, index) => (
                                  <View
                                      style={{
                                          flexDirection: 'row',
                                          marginTop: 20,
                                          alignItems: 'center',
                                          marginBottom: 10
                                      }}
                                      key={index}
                                  >
                                      <Image
                                          style={{
                                              width: 50,
                                              height: 50,
                                              borderRadius: 25,
                                              marginLeft: 10
                                          }}
                                          source={{
                                              uri:
                                                      message.sentBy[0]
                                                          .profileimage
                                          }}
                                      />
                                      <Text
                                          style={{
                                              width: 175,
                                              marginLeft: 15,
                                              borderWidth: 1,
                                              borderColor:
                                                      assetColors.darkBlue,
                                              borderRadius: 6,
                                              padding: 5,
                                              marginBottom: 10
                                          }}
                                      >
                                          {message.text}
                                      </Text>
                                  </View>
                              ))}
                    </ScrollView>
                )}
            </Subscription>
            <Mutation mutation={createMessages}>
                {addMessage => (
                    <ScrollView>
                        <View>
                            <Form
                                onSubmit={values => {
                                    const newMessage = {
                                        text: values.message,
                                        sentByIds: currentUser,
                                        roomidId: messageData.id
                                    };
                                    addMessage({ variables: newMessage });
                                    updateMessage(values.message);
                                    updateRoom(messageData.id);
                                }}
                                render={({
                                    handleSubmit,
                                    pristine,
                                    invalid,
                                    values,
                                    reset,
                                    form
                                }) => (
                                    <View style={styles.inputContainer}>
                                        <Field
                                            name="message"
                                            render={({ input, meta }) => (
                                                <TextInput
                                                    {...input}
                                                    placeholder="Enter Message"
                                                    style={styles.textInput}
                                                />
                                            )}
                                        />

                                        <TouchableOpacity
                                            disabled={invalid || pristine}
                                        >
                                            <Text
                                                onPress={() => {
                                                    handleSubmit();
                                                    form.reset();
                                                }}
                                                style={styles.sentButton}
                                            >
                                                Send
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            />
                        </View>
                    </ScrollView>
                )}
            </Mutation>
        </ScrollView>
    </View>
);

Messages.propTypes = {
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired,
    currentUser: PropTypes.string.isRequired,
    updateUser: PropTypes.func.isRequired,
    updateMessage: PropTypes.func.isRequired,
    updateRoom: PropTypes.func.isRequired,
    messageData: PropTypes.object.isRequired
};

export default graphql(createMessages, { name: 'createMessages' })(Messages);
