import React from 'react';
import { Image, Text, View } from 'react-native';

const HeaderComponent = () => {
  return (
    <View>
      <Image
        style={{ height: 50, width: 50 }}
        source={require('../../assets/images/logo/qp_blue_org.png')}
      />
      <Text>HeaderComponent</Text>
    </View>
  );
};

export default HeaderComponent;
