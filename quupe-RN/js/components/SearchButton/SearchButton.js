import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';
import { assetColors } from '../../assets/styles';

const SearchButton = () => (
    <View style={styles.btnWrapper}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('hello')}
        >
            <Text style={styles.btnText}>Search</Text>
        </TouchableOpacity>
    </View>
);

export default SearchButton;
