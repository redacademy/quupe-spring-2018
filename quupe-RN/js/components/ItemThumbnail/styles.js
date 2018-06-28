import { StyleSheet } from 'react-native';
import { assetColors, assetTypography } from '../../assets/styles';

const styles = StyleSheet.create({
    itemWrapper: {
        width: 170,
        height: 130,
        backgroundColor: assetColors.white,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    imageStyle: {
        resizeMode: 'stretch',
        borderRadius: 7.5
    },
    thumbnailPrice: {
        padding: 5,
        backgroundColor: assetColors.white,
        borderBottomRightRadius: 1000
    }
});
export default styles;
