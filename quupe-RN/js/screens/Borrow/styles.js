import { StyleSheet } from 'react-native';
import { assetColors } from '../../assets/styles';

const styles = StyleSheet.create({
    page: {
        backgroundColor: assetColors.white,
        height: '100%',
        paddingTop: '10%'
    },
    btnWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    searchBtn: {
        backgroundColor: assetColors.mediumGrey,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 50,
        borderRadius: 5,
        marginBottom: 10
    },
    searchBtnClickable: {
        backgroundColor: assetColors.darkBlue,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 50,
        borderRadius: 5,
        marginBottom: 10
    },
    searchBtnText: {
        color: assetColors.white,
        fontSize: 16
    },
    mapWrapper: {
        height: '65%',
        padding: 20,
        paddingBottom: 10
    }
});
export default styles;
