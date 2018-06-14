import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

const SignUp = (props) => (
  <View style={styles.login}>
    <TextInput
      style={styles.input}
      onChangeText={(fullname) => props.handleFullName(fullname)}
      value={props.name}
      placeholder="Full Name"
    />
    <TextInput
      style={styles.input}
      onChangeText={(email) => props.handleEmail(email)}
      value={props.email}
      placeholder="Email"
    />
    <TextInput
      style={styles.input}
      onChangeText={(password) => props.handlePassword(password)}
      value={props.password}
      placeholder="Password"
    />

    <TouchableOpacity >
      <Text style={styles.signInButton}>Sign Up</Text>
    </TouchableOpacity>
    <Text style={styles.seperator}>OR</Text>
  </View>
);

export default SignUp;