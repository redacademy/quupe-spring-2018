import { StyleSheet } from 'react-native';
import { assetColors, assetTypography } from '../../assets/styles';

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: assetColors.white,
        paddingTop: '10%'
    },
    itemListWrapper: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemList: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    itemTextInputWrapper: {
        flexDirection: 'row',
        backgroundColor: assetColors.white,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: assetColors.mediumGrey,
        width: '95%',
        height: 30,
        paddingLeft: 10,
        marginBottom: 5,
        marginTop: 5
    },
    locationTextWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingLeft: 10
    },
    locationText: {
        color: assetColors.darkGrey,
        flexWrap: 'wrap',
        width: '90%',
        padding: 10
    },
    itemTextInput: {
        width: '90%',
        fontSize: 18
    },
    ionicon: {
        paddingRight: 10
    },
    activityIndicator: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10
    },
    buttons: {
        width: 150,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: assetColors.darkBlue
    }
});
export default styles;
