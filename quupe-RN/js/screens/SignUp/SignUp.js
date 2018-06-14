import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

const SignUp = (props) => (
  <View style={styles.login}>
    <TextInput
      style={styles.input}
      onChangeText={}
      value={}
      placeholder="Full Name"
    />
    <TextInput
      style={styles.input}
      onChangeText={}
      value={}
      placeholder="Email"
    />
    <TextInput
      style={styles.input}
      onChangeText={}
      value={}
      placeholder="Password"
    />

    <TouchableOpacity >
      <Text style={styles.signInButton}>Sign Up</Text>
    </TouchableOpacity>
    <Text style={styles.seperator}>OR</Text>
  </View>
);

export default SignUp;