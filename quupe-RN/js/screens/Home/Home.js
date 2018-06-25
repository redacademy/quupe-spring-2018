import React from 'react';
import { View, Text, Image } from 'react-native';

const Home = ({ itemData }) => (
    <View>
        {itemData.map((item, index) => (
            <View>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={{
                        uri: `${item.image && item.image}`
                    }}
                />
                <Text>{item.title}</Text>
                <Text>{item.originalPrice}</Text>
            </View>
        ))}
    </View>
);
export default Home;
