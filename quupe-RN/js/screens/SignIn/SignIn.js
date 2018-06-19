import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Form, Field } from 'react-final-form';

import styles from './styles';

const SignIn = props => (
    <Form
        onSubmit={values => {
            props.authenticateUser({
                variables: { ...values }
            });
        }}
        // validate={validate}
        render={({ handleSubmit, pristine, invalid }) => (
            <View style={styles.login}>
                <Field
                    name="email"
                    render={({ input, meta }) => (
                        <TextInput
                            {...input}
                            style={styles.input}
                            placeholder="Email"
                        />
                    )}
                />
                <Field
                    name="password"
                    render={({ input, meta }) => (
                        <TextInput
                            {...input}
                            style={styles.input}
                            placeholder="Password"
                        />
                    )}
                />
                {props.loading && <Text>Loading</Text>}
                {props.error && <Text>There was an error</Text>}
                <TouchableOpacity disabled={pristine || invalid}>
                    <Text style={styles.signInButton} onPress={handleSubmit}>
                        Sign In
                    </Text>
                </TouchableOpacity>
            </View>
        )}
    />
);

SignIn.defaultProps = {
    error: ''
};

SignIn.propTypes = {
    authenticateUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default SignIn;
