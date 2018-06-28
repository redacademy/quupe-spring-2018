import { StyleSheet } from 'react-native';
import { assetColors } from '../../assets/styles';

const styles = StyleSheet.create({
    topNavContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10
    },
    navText: {
        marginLeft: 15,
        fontSize: 15
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '93.5%',
        marginLeft: 10,
        marginBottom: 10
    },
    textInput: {
        borderWidth: 1.5,
        padding: 8,
        width: '75%',
        borderRadius: 5,
        borderColor: assetColors.darkGrey
    },
    sentButton: {
        borderWidth: 1.5,
        padding: 8,
        width: '100%',
        borderRadius: 5,
        borderColor: assetColors.darkBlue,
        color: assetColors.darkBlue
    }
});

export default styles;
