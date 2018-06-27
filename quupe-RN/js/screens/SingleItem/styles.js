import { StyleSheet } from 'react-native';
import { assetColors } from '../../assets/styles';

const styles = StyleSheet.create({
    itemImage: {
        width: '100%',
        height: 200,
        marginTop: 20
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 20
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    tabButton: {
        backgroundColor: assetColors.mediumGrey,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    currentTabButton: {
        backgroundColor: assetColors.darkBlue,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    tabText: {
        color: 'white'
    },
    tabInfo: {
        alignItems: 'center',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: assetColors.darkBlue,
        width: 292,
        alignSelf: 'center',
        padding: 20,
        height: 140
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 10
    },
    pricing: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    pricingText: {
        color: assetColors.mediumGrey,
        fontSize: 12
    },
    price: {
        fontSize: 16
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    sendMessage: {
        borderWidth: 2,
        borderRadius: 7,
        borderColor: assetColors.darkBlue,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 10
    },
    messageText: {
        color: assetColors.darkBlue
    },
    itemTags: {
        fontSize: 10,
        borderWidth: 1,
        borderColor: assetColors.darkGrey,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 12,
        marginRight: 5
    },
    tagList: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginBottom: 10
    },
    description: {
        alignSelf: 'flex-start'
    },
    bookItem: {
        backgroundColor: assetColors.darkBlue,
        paddingTop: 10,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 10,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 20
    },
    bookText: {
        color: 'white'
    },
    locationView: {
        height: 140,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: assetColors.darkBlue,
        width: 292,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 10
    },
    overlay: {
        backgroundColor: 'white',
        marginTop: 120,
        marginBottom: 120,
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 1,
        borderColor: assetColors.darkBlue,
        justifyContent: 'flex-start',
        padding: 0
    },
    closeButton: {
        color: assetColors.darkBlue,
        position: 'absolute',
        top: 10,
        right: 10
    },
    messageInput: {
        height: 150,
        borderWidth: 1,
        borderColor: assetColors.darkBlue,
        borderRadius: 6,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 20
    },
    messageContainer: {
        width: '100%'
    },
    sendMessageButton: {
        borderWidth: 2,
        borderRadius: 6,
        borderColor: assetColors.darkBlue,
        paddingTop: 10,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 10,
        alignItems: 'center',
        marginTop: 10,
        width: '60%',
        alignSelf: 'flex-end'
    }
});

export default styles;
