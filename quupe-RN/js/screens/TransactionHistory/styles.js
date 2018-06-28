import { assetColors } from '../../assets/styles';

const styles = {
    itemsContainer: {
        padding: 15
    },

    headerTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 5
    },
    header: {
        flexDirection: 'row',
        height: 100,
        marginTop: 40
    },
    backButton: {
        marginRight: 20,
        fontSize: 40,
        marginBottom: 15,
        paddingRight: 10
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
        width: '50%',
        height: 35,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lent: {
        backgroundColor: assetColors.darkBlue,
        width: '50%',
        height: 35,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    greyLent: {
        backgroundColor: assetColors.lightGrey,
        width: '50%',
        height: 35,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    greyBorrowed: {
        backgroundColor: assetColors.lightGrey,
        width: '50%',
        height: 35,
        borderTopLeftRadius: 8,
        borderBorromLeftRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 16
    },
    borrowLendButtons: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    borrowLentImages: {
        width: 120,
        height: 85,
        borderRadius: 10
    },
    lentItemsTitle: {
        fontWeight: 'bold',
        fontSize: 18,

        marginTop: 18,
        marginBottom: 15
    },
    hidden: {
        display: 'none'
    },

    itemPanel: {
        marginTop: 15,
        borderWidth: 1,
        borderColor: assetColors.darkBlue,
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row'
    },
    itemPanelTitle: {
        fontWeight: 'bold'
    },
    itemPanelText: {
        flexDirection: 'column',
        marginLeft: 10
    }
};

export default styles;
