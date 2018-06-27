import { assetColors } from '../../assets/styles';

const styles = {
    itemsContainer: {
        padding: 15
    },
    header: {
        flexDirection: 'row',
        height: 100,
        marginTop: 40
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 5
    },
    backButton: {
        marginRight: 20,
        fontSize: 40,
        marginBottom: 15,
        paddingRight: 10
    },
    image: {
        height: 80,
        width: 110,
        borderRadius: 10
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
    },
    borrowingFrom: {
        flex: 1,
        flexWrap: 'wrap'
    },
    borrowedHeader: {
        marginTop: 25
    }
};

export default styles;
