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
        validate={values => {
            const errors = {};
            if (!values.email || !values.password) {
                errors.message = 'Missing fields';
            }
            return errors;
        }}
        render={({ handleSubmit, pristine, invalid }) => (
            <View style={styles.login}>
                <Field
                    name="email"
                    render={({ input }) => (
                        <TextInput
                            {...input}
                            style={styles.input}
                            placeholder="Email"
                            autoCapitalize="none"
                        />
                    )}
                />
                <Field
                    name="password"
                    render={({ input }) => (
                        <TextInput
                            {...input}
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry
                            autoCapitalize="none"
                        />
                    )}
                />
                {props.loading && <Text>Loading</Text>}
                {props.error.message &&
                    props.error.message.includes('Invalid credentials') && (
                    <Text>Invalid email or password</Text>
                )}
                {props.error.message &&
                    props.error.message.includes('An unexpected error occured during authentication.') && <Text>An error occured, please try again</Text>}
                <TouchableOpacity
                    onPress={handleSubmit}
                    disabled={pristine || invalid}
                    style={
                        invalid ? styles.disabledButton : styles.signInButton
                    }
                >
                    <Text style={styles.signInText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        )}
    />
);

SignIn.defaultProps = {
    error: {}
};

SignIn.propTypes = {
    authenticateUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.string]))
};

export default SignIn;
