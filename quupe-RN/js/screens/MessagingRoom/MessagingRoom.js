import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Button
} from 'react-native';
import PropTypes from 'prop-types';
import Moment from 'moment';
import styles from './styles';

const MessagingRoom = ({
    roomData,
    navigation,
    currentUser,
    message,
    roomDataId
}) => (
    <ScrollView>
        <View
            style={{
                marginTop: 40,
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
                marginBottom: 20
            }}
        >
            <Ionicons
                size={30}
                name="md-arrow-back"
                color="black"
                onPress={() => navigation.navigate('Account')}
            />
            <Text style={styles.topNav}>Messages</Text>
        </View>
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
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.contentName}>
                                        {
                                            room.messages.slice(-1)[0].sentBy[0]
                                                .fullname
                                        }
                                    </Text>
                                </View>
                                <Text>
                                    {message && room.id === roomDataId
                                        ? message
                                        : room.messages.slice(-1)[0].text}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
    </ScrollView>
);

export default MessagingRoom;

MessagingRoom.propTypes = {
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired,
    currentUser: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    roomData: PropTypes.array.isRequired,
    roomDataId: PropTypes.string.isRequired
};
