import { Dimensions } from 'react-native';
import { assetColors } from '../../assets/styles';

const window = Dimensions.get('window');

const styles = {
    itemsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        height: '100%'
    },
    image: {
        width: window.width / 2.2,
        height: 150,
        borderRadius: 10
    },
    edit: {
        position: 'absolute',
        right: 12,
        top: 5,
        borderRadius: 15,
        backgroundColor: assetColors.lightGrey,
        width: 75,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15
    },
    item: {
        borderRadius: 10,
        position: 'relative',
        margin: 8
    },
    price: {
        position: 'absolute',
        right: 0,
        bottom: 17.7,
        fontSize: 20,
        backgroundColor: '#fff'
    }
};
export default styles;
