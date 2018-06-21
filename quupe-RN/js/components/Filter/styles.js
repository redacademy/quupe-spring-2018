import { StyleSheet } from 'react-native';
import { assetColors, assetTypography } from '../../assets/styles';

const styles = StyleSheet.create({
    filterWrapper: {
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        zIndex: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    searchContainer: {
        backgroundColor: assetColors.white,
        borderBottomWidth: 0,
        borderTopWidth: 0,
        width: '100%'
    },
    searchText: {
        fontSize: 14,
        backgroundColor: assetColors.white,
        borderWidth: 1,
        borderColor: assetColors.mediumGrey
    },
    textInputContainer: {
        backgroundColor: assetColors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: assetColors.mediumGrey,
        width: '95%',
        height: 30,
        paddingLeft: 10
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
    }
});
export default styles;
