import { StyleSheet } from 'react-native';
import { assetColors } from '../../assets/styles';

const styles = StyleSheet.create({
    backgroundImage: {
        width: '45%',
        margin: 5
    },
    itemContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: 110,
        borderRadius: 7,
        overflow: 'hidden'
    },
    price: {
        backgroundColor: 'white',
        fontSize: 14,
        color: assetColors.darkGrey,
        position: 'absolute',
        bottom: 0,
        right: 0,
        padding: 5
    },
    itemTitle: {
        fontSize: 13
    }
});

export default styles;
