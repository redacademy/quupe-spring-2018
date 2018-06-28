import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

const Account = props => {
    const {
        fullname,
        bio,
        profileimage,
        items,
        allBorrowed,
        rooms
    } = props.userData;
    return (
        <ScrollView style={styles.accountWrapper}>
            <View style={styles.cardContainer}>
                <Image
                    style={styles.profileimage}
                    source={{ uri: profileimage }}
                />
                <View style={styles.nameContainer}>
                    <Text style={styles.fullname}>{fullname}</Text>
                    <TouchableOpacity
                        onPress={() => props.logOut(props.currentToken)}
                    >
                        <Text>LogOut</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.bio}>{bio}</Text>
            <View styles={styles.blocksWrapper}>
                <View style={styles.rows}>
                    <TouchableOpacity
                        style={styles.box}
                        onPress={() =>
                            props.nav.navigate('MyItems', {
                                userItems: items,
                                nav: props.nav
                            })
                        }
                    >
                        <View style={styles.blueBox}>
                            <Text>My Items</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.box}
                        onPress={() =>
                            props.nav.navigate('MessagesRoomContainer', {
                                rooms,
                                currentUser: props.currentUser
                            })
                        }
                    >
                        <View style={styles.blueBox}>
                            <Text>Messages</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.rows}>
                    <TouchableOpacity
                        style={styles.box}
                        onPress={() =>
                            props.nav.navigate('TransactionHistory', {
                                userItems: items,
                                nav: props.nav
                            })
                        }
                    >
                        <View style={styles.blueBox}>
                            <Text style={styles.blueBoxText}>
                                Transaction History
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.box}
                        onPress={() =>
                            props.nav.navigate('Favorites', {
                                userItems: items
                            })
                        }
                    >
                        <View style={styles.blueBox}>
                            <Text>Favourites</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.rows}>
                    <TouchableOpacity
                        style={styles.box}
                        onPress={() =>
                            props.nav.navigate('BorrowedItems', {
                                borrowed: allBorrowed,
                                nav: props.nav
                            })
                        }
                    >
                        <View style={styles.blueBox}>
                            <Text>Borrowed Items</Text>
                            <Text>Status / History</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.box}
                        onPress={() =>
                            props.nav.navigate('LentItems', {
                                userItems: items,
                                nav: props.nav
                            })
                        }
                    >
                        <View style={styles.blueBox}>
                            <Text>Lent Items</Text>
                            <Text>Status / History</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

Account.propTypes = {
    nav: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired,
    userData: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.array])).isRequired,
    logOut: PropTypes.func.isRequired,
    currentToken: PropTypes.string.isRequired
};

export default Account;
