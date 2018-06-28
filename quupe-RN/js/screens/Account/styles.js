import { StyleSheet } from 'react-native';
import { assetTypography, assetColors } from '../../assets/styles';

const styles = StyleSheet.create({
    accountWrapper: {
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff'
    },
    cardContainer: {
        flexDirection: 'row',
        paddingTop: 25,
        paddingLeft: 35
    },
    nameContainer: {
        flexDirection: 'column',
        paddingTop: 15
    },
    profileimage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 25
    },
    fullname: {
        fontWeight: 'bold',
        fontSize: 24,
        fontFamily: assetTypography.mainHeader
    },
    bio: {
        alignSelf: 'center',
        marginBottom: 15,
        fontFamily: assetTypography.subHeader
    },
    rows: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    box: {
        width: 170,
        height: 110,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        borderRadius: 10
    },
    blueBox: {
        alignSelf: 'center',
        alignItems: 'center'
    },
    blueBoxText: {
        fontFamily: assetTypography.subHeader
    },
    nameEditWrapper: {
        flexDirection: 'row'
    },
    edit: {
        borderRadius: 15,
        backgroundColor: assetColors.lightGrey,
        width: 50,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15
    },
    imagePlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 25
    }
});
export default styles;
