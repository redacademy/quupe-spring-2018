import { StyleSheet } from 'react-native';
import { assetColors } from '../../assets/styles';

const styles = StyleSheet.create({
    topNav: {
        marginBottom: 10
    },
    messageRoomContainer: {
        borderWidth: 1.3,
        borderColor: assetColors.darkBlue,
        marginBottom: 15,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'column'
    },
    invididualRoom: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    content: {
        marginLeft: 15
    },
    contentName: {
        fontWeight: 'bold'
    },
    contentContext: {
        fontWeight: '200'
    }
});

export default styles;
