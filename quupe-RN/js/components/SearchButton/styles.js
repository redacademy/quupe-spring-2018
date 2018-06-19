import { StyleSheet } from 'react-native';
import { assetColors } from '../../assets/styles';

const styles = StyleSheet.create({
    btnWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: assetColors.darkBlue,
        padding: 15,
        width: '90%',
        borderRadius: 5
    },
    btnText: {
        color: assetColors.white,
        fontSize: 16
    }
});
export default styles;
