import { StyleSheet } from 'react-native';
import { assetColors, assetTypography } from '../../assets/styles';

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    logo: {
        width: 150,
        height: 40,
        marginBottom: 50
    },
    loginScreen: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 20,
        marginBottom: 5,
        color: assetColors.darkGrey
    },
    login: {
        backgroundColor: assetColors.darkBlue,
        width: 100,
        height: 40,
        borderRadius: 7,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginText: {
        color: 'white'
    },
    signInUp: {
        flexDirection: 'row',
        marginTop: 80
    },
    explore: {
        width: 210,
        height: 40,
        backgroundColor: assetColors.lightBlue,
        borderRadius: 7,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    exploreText: {
        color: assetColors.darkGrey
    }
});

export default styles;
