import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Button
} from 'react-native';
import { graphql, Mutation, Subscription } from 'react-apollo';
import gql from 'graphql-tag';
import { Form, Field } from 'react-final-form';
import { NavigationActions } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

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
                        }
                    }
                }
            }
        }
    }
`;

const Messages = ({ messageData, navigation, currentUser }) => (
    <ScrollView>
        <Mutation mutation={createMessages}>
            {addMessage => (
                <ScrollView>
                    <View style={styles.topNavContainer}>
                        <Ionicons
                            size={30}
                            name="md-arrow-back"
                            onPress={() => {
                                navigation.dispatch(NavigationActions.back());
                            }}
                        />
                        <Text style={styles.navText}>
                            {messageData.people[1].fullname}
                        </Text>
                    </View>
                    <View
                        style={{
                            borderWidth: 1.2,
                            width: '95%',
                            marginLeft: 7,
                            marginTop: 10,
                            borderRadius: 10,
                            marginBottom: 10
                        }}
                    >
                        <View>
                            <Form
                                onSubmit={values => {
                                    const newMessage = {
                                        text: values.message,
                                        sentByIds: currentUser,
                                        roomidId: messageData.id
                                    };
                                    console.log(newMessage);
                                    addMessage({ variables: newMessage });
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
                    </View>
                </ScrollView>
            )}
        </Mutation>
        <Subscription subscription={messageSubscription}>
            {({ data, loading }) => (
                <ScrollView>
                    {messageData.messages.map((message, index) => (
                        <View key={index} style={{ flexDirection: 'row' }}>
                            <Text>{message.sentBy[0].fullname}:</Text>
                            <Text>{message.text}</Text>
                            {/* <Text>{data && data }</Text> */}
                        </View>
                    ))}
                    <Text>
                        {data &&
                            data.Messages.node.roomid.messages.slice(-1)[0]
                                .sentBy[0].fullname}
                    </Text>
                    <Text>
                        {data &&
                            data.Messages.node.roomid.messages.slice(-1)[0]
                                .text}
                    </Text>
                </ScrollView>
            )}
        </Subscription>
    </ScrollView>
);

export default graphql(createMessages, { name: 'createMessages' })(Messages);
