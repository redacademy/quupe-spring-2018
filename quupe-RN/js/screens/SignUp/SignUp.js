import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Form, Field } from 'react-final-form';
import styles from './styles';

const SignUp = (props) => (
  <Form
    onSubmit={(values) => {
      props.signupUser({
        variables: { ...values }
      });
    }}
    render={({ handleSubmit, pristine, invalid }) => (
      <View style={styles.login}>
        <Field
          name='fullname'
          render={({ input, meta }) => (
            <TextInput
              {...input}
              style={styles.input}
              placeholder='Full Name'
            />
          )}
        />
        <Field
          name='email'
          render={({ input, meta }) => (
            <TextInput
              {...input}
              style={styles.input}
              placeholder='Email'
            />
          )}
        />
        <Field
          name='password'
          render={({ input, meta }) => (
            <TextInput
              {...input}
              style={styles.input}
              placeholder='Password'
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

export default SignUp;








{/* <View style={styles.login}>
    <TextInput
      style={styles.input}
      placeholder="Full Name"
    />
    <TextInput
      style={styles.input}
      placeholder="Email"
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
    />

    <TouchableOpacity >
      <Text style={styles.signInButton}>Sign Up</Text>
    </TouchableOpacity>
    <Text style={styles.seperator}>OR</Text>
  </View> */}