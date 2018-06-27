import React from 'react';
import { Image, View } from 'react-native';

const HeaderComponent = () => (
    <View>
        <Image
            style={{ height: 50, width: 50 }}
            source={require('../../assets/images/logo/qp_blue_org.png')}
        />
    </View>
);

export default HeaderComponent;
