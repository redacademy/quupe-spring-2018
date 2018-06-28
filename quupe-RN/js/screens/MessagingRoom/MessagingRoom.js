import React from 'react';
import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Button
} from 'react-native';
import styles from './styles';

const MessagingRoom = ({ roomData, navigation, currentUser }) => (
    <ScrollView>
        <Text style={styles.topNav}>Messages</Text>
        {roomData &&
            roomData.map((room, index) => (
                <View key={index} style={styles.messageRoomContainer}>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('MessagesModal', {
                                room,
                                currentUser
                            })
                        }
                    >
                        <View style={styles.invididualRoom}>
                            <View>
                                <Image
                                    style={styles.image}
                                    source={{
                                        uri: `${room.messages.slice(-1)[0]
                                            .sentBy[0].profileimage &&
                                            room.messages.slice(-1)[0].sentBy[0]
                                                .profileimage}`
                                    }}
                                />
                            </View>
                            <View style={styles.content}>
                                <Text style={styles.contentName}>
                                    {
                                        room.messages.slice(-1)[0].sentBy[0]
                                            .fullname
                                    }
                                </Text>
                                <Text>{room.messages.slice(-1)[0].text}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
    </ScrollView>
);

export default MessagingRoom;
