import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { graphql, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Form, Field } from 'react-final-form';

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
const Messages = ({ messageData }) => (
    <Mutation mutation={createMessages}>
        {addMessage => (
            <ScrollView>
                {messageData.Room.messages.map((message, index) => (
                    <View key={index}>
                        <Text>{message.sentBy[0].fullname}:</Text>
                        <Text>{message.text}</Text>
                    </View>
                ))}
                <View>
                    <Form
                        onSubmit={values => {
                            const newMessage = {
                                text: values.message,
                                sentByIds: 'cjig7qmm227kd0122oypew1ou',
                                roomidId: messageData.Room.id
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
                            <View>
                                <Field
                                    name="message"
                                    render={({ input, meta }) => (
                                        <TextInput
                                            {...input}
                                            placeholder="Enter Message"
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
                                    >
                                        Create Post
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        )}
    </Mutation>
);

export default graphql(createMessages, { name: 'createMessages' })(Messages);
