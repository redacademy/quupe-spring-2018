import { StyleSheet } from 'react-native';
import { assetColors } from '../../assets/styles';

const styles = StyleSheet.create({
    calendarScreen: {
        marginTop: 20,
        alignItems: 'center',
        height: '100%'
    },
    calendarTitle: {
        fontSize: 20,
        position: 'absolute',
        top: 2
    },
    backButton: {
        position: 'absolute',
        left: 10
    },
    calendar: {
        width: '90%',
        marginTop: 30
    },
    fromToContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: assetColors.darkGrey,
        width: '90%',
        marginTop: 40,
        paddingLeft: 10,
        paddingRight: 10
    },
    overlayDateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: assetColors.darkGrey,
        width: '100%',
        padding: 10,
        marginTop: 20
    },
    bookButton: {
        backgroundColor: assetColors.darkBlue,
        width: '90%',
        height: 40,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0
    },
    disabledButton: {
        backgroundColor: assetColors.mediumGrey,
        width: '90%',
        height: 40,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0
    },
    bookItemText: {
        color: 'white',
        fontSize: 20
    },
    overlay: {
        backgroundColor: 'white',
        marginTop: 40,
        marginBottom: 40,
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 1,
        borderColor: assetColors.darkBlue,
        justifyContent: 'flex-start'
    },
    closeButton: {
        color: assetColors.darkBlue,
        position: 'absolute',
        top: 0,
        right: 0
    },
    overlayTitle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    itemInfo: {
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginTop: 10,
        marginBottom: 10
    },
    itemText: {
        alignSelf: 'flex-start'
    },
    confirmButton: {
        backgroundColor: assetColors.darkBlue,
        width: '90%',
        height: 40,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    envText: {
        color: assetColors.darkBlue,
        textAlign: 'center',
        fontSize: 17
    },
    borrowButton: {
        backgroundColor: assetColors.darkBlue,
        borderRadius: 7,
        width: '50%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    homeButton: {
        borderColor: assetColors.darkBlue,
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 7,
        width: '50%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    homeText: {
        color: assetColors.darkBlue,
        fontSize: 20
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 20
    },
    text: {
        textAlign: 'center',
        fontSize: 17,
        marginTop: 20
    }
});

export default styles;
