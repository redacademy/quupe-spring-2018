import { StyleSheet } from 'react-native';
import { assetColors, assetTypography } from '../../assets/styles';

const styles = StyleSheet.create({
    filterWrapper: {
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 35,
        zIndex: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },

    textInputContainer: {
        backgroundColor: assetColors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: assetColors.mediumGrey,
        width: '97%',
        height: 42,
        paddingLeft: 10,
        marginBottom: 5,
        marginTop: 5
    },
    itemTextInputWrapper: {
        flexDirection: 'row',
        backgroundColor: assetColors.white,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: assetColors.mediumGrey,
        width: '97%',
        height: 42,
        paddingLeft: 10,
        marginBottom: 5,
        marginTop: 5,
        zIndex: 10
    },
    itemTextInput: {
        width: '94%',
        borderWidth: 0
    },
    ionicon: {
        paddingRight: 10
    },
    textInput: {
        paddingLeft: 0,
        fontSize: 14,
        height: 25,
        color: assetColors.mediumGrey,
        borderWidth: 0,
        margin: 0,
        marginBottom: 5
    },
    predefinedPlacesDescription: {
        color: assetColors.mediumGrey
    },
    listView: {
        position: 'absolute',
        marginTop: 35,
        backgroundColor: assetColors.white,
        width: '95%'
    },
    inputContainerStyle: {
        borderWidth: 0,
        padding: 0,
        width: '96%',
        margin: 0
    },
    filteredItems: {
        borderWidth: 0.5,
        padding: 5,
        borderColor: assetColors.mediumGrey
    }
});
export default styles;
