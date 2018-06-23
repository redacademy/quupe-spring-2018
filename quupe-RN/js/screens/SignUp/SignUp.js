import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Linking } from 'react-native';
import RoundCheckbox from 'rn-round-checkbox';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import { acceptTerms } from '../../redux/modules/Token';
import { assetColors } from '../../assets/styles';

const SignUp = props => (
    <Form
        onSubmit={values => {
            props
                .signupUser({
                    variables: { ...values }
                })
                .catch(error => console.log(error));
        }}
        validate={values => {
            const errors = {};
            if (!values.fullname || !values.email || !values.password) {
                errors.message = 'Missing fields';
            } else if (!props.acceptedTerms) {
                errors.message = 'Please accept the terms and conditions';
            }
            return errors;
        }}
        render={({ handleSubmit, invalid }) => (
            <View style={styles.login}>
                <Field
                    name="fullname"
                    render={({ input }) => (
                        <TextInput
                            {...input}
                            style={styles.input}
                            placeholder="Full Name"
                        />
                    )}
                />
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
                <Field
                    name="terms"
                    render={() => (
                        <View style={styles.terms}>
                            <RoundCheckbox
                                onValueChange={() =>
                                    props.dispatch(acceptTerms())
                                }
                                checked={props.acceptedTerms}
                                style={styles.checkbox}
                                size={20}
                                backgroundColor={assetColors.darkGrey}
                                borderColor={assetColors.darkGrey}
                            />
                            <Text style={styles.termText}>
                                I agree to Quupe's{' '}
                                <Text
                                    style={styles.link}
                                    onPress={() =>
                                        Linking.openURL('https://quupe.com/tnc.html')
                                    }
                                >
                                    Terms and Conditions
                                </Text>
                            </Text>
                        </View>
                    )}
                />
                {props.loading && <Text>Loading</Text>}
                {props.error.message &&
                    props.error.message.includes('Not a valid email') && (
                    <Text>Invalid email</Text>
                )}
                {props.error.message &&
                    props.error.message.includes('Email already in use') && (
                    <Text>Email already in use</Text>
                )}
                <TouchableOpacity
                    onPress={handleSubmit}
                    disabled={invalid}
                    style={
                        invalid ? styles.disabledButton : styles.signInButton
                    }
                >
                    <Text style={styles.signInText}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.seperator}>OR</Text>
            </View>
        )}
    />
);

SignUp.defaultProps = {
    error: {}
};

SignUp.propTypes = {
    dispatch: PropTypes.func.isRequired,
    signupUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.string])),
    acceptedTerms: PropTypes.bool.isRequired
};

export default SignUp;
