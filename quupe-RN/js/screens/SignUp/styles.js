import { StyleSheet } from 'react-native';
import { assetColors } from '../../assets/styles';

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 7,
        width: '90%',
        margin: 5,
        paddingLeft: 5,
        paddingRight: 5
    },
    login: {
        alignItems: 'center'
    },
    signInButton: {
        backgroundColor: assetColors.darkBlue,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 7,
        overflow: 'hidden',
        marginTop: 5
    },
    disabledButton: {
        backgroundColor: assetColors.mediumGrey,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 7,
        marginTop: 5,
        overflow: 'hidden'
    },
    signInText: {
        color: 'white'
    },
    seperator: {
        fontWeight: 'bold',
        margin: 20,
        color: assetColors.darkGrey
    },
    container: {
        marginTop: 20
    },
    headerImage: {
        width: 150,
        height: 50,
        alignSelf: 'center',
        marginBottom: 25
    },
    terms: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    checkbox: {
        borderRadius: 100
    },
    link: {
        color: assetColors.darkBlue,
        textDecorationLine: 'underline'
    },
    termText: {
        paddingLeft: 7
    }
});

export default styles;
