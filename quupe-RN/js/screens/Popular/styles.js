import { StyleSheet } from 'react-native';
import { assetColors } from '../../assets/styles';

const styles = StyleSheet.create({
    categoryHeader: {
        fontSize: 15,
        color: assetColors.darkGrey,
        marginLeft: 10
    },
    itemImage: {
        width: '100%',
        height: 110,
        borderRadius: 7
    },
    image: {
        width: '100%',
        height: 110
    },
    sectionList: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    showMoreButton: {
        backgroundColor: assetColors.darkBlue,
        width: '70%',
        height: 35,
        alignSelf: 'center',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    showMoreText: {
        color: 'white',
        fontSize: 15
    }
});

export default styles;
