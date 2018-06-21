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
    }
});
export default styles;
