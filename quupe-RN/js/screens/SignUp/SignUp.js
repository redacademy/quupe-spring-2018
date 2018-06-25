import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import styles from './styles';

const SignUp = props => (
    <Form
        onSubmit={values => {
            props
                .signupUser({
                    variables: { ...values }
                })
                .catch(error => console.log(error));
        }}
        render={({ handleSubmit, pristine, invalid }) => (
            <View style={styles.login}>
                <Field
                    name="fullname"
                    render={({ input, meta }) => (
                        <TextInput
                            {...input}
                            style={styles.input}
                            placeholder="Full Name"
                        />
                    )}
                />
                <Field
                    name="email"
                    render={({ input, meta }) => (
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
                    render={({ input, meta }) => (
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
                {props.error && <Text>There was an error</Text>}
                <TouchableOpacity onPress={handleSubmit}>
                    <Text style={styles.signInButton}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.seperator}>OR</Text>
            </View>
        )}
    />
);

SignUp.defaultProps = {
    error: ''
};

SignUp.propTypes = {
    signupUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default SignUp;
