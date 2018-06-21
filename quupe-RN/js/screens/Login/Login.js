import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const Login = props => (
    <View style={styles.loginScreen}>
        <Image
            source={require('../../assets/images/qp_blue_org.png')}
            style={styles.logo}
        />
        <Text style={styles.headerText}>Experience more</Text>
        <Text style={styles.headerText}>Own less</Text>
        <View style={styles.signInUp}>
            <TouchableOpacity
                style={styles.login}
                onPress={() => props.nav.navigate('SignIn')}
            >
                <Text style={styles.loginText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.login}
                onPress={() => props.nav.navigate('SignUp')}
            >
                <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity
            style={styles.explore}
            onPress={() => props.nav.navigate('Home')}
        >
            <Text style={styles.exploreText}>Explore First</Text>
        </TouchableOpacity>
    </View>
);

export default Login;
