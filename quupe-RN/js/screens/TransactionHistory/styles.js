import { assetColors } from '../../assets/styles';

const styles = {
    pageContent: {
        marginTop: 80
    },
    backButton: {
        position: 'absolute',
        left: 10,
        margin: 20,
        marginTop: 40
    },
    money: {
        flexDirection: 'row'
    },
    spentEarned: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    borrowed: {
        backgroundColor: assetColors.darkBlue,
        width: '45%',
        height: 45,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    grey: {
        backgroundColor: assetColors.lightGrey,
        width: '45%',
        height: 45,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    borrowLendButtons: {
        flexDirection: 'row'
    },
    borrowLentImages: {
        width: 120,
        height: 85,
        borderRadius: 10
    },
    itemTile: {
        borderWidth: 1,
        borderColor: assetColors.darkBlue,
        borderRadius: 10,
        padding: 15,
        margin: 10
    }
};

export default styles;
