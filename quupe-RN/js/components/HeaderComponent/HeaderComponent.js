import React from 'react';
import { Image } from 'react-native';

const HeaderComponent = () => (
    <Image
        style={{ height: 50, width: 50 }}
        source={require('../../assets/images/logo/qp_blue_org.png')}
    />
);

export default HeaderComponent;
