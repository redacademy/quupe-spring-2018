import React from 'react';
import { View, Text, TouchableOpacity, SectionList } from 'react-native';

const MessagingRoom = ({ roomData, navigation, messages }) => (
    <View>
        {roomData.allUsers[0].rooms.map((room, index) => (
            <View key={index}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.push('Messages', {
                            room
                        })
                    }
                >
                    <Text>{room.id}</Text>
                </TouchableOpacity>
            </View>
        ))}
    </View>
);

export default MessagingRoom;
