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
        color: 'white',
        marginTop: 5
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
    }
});

export default styles;
