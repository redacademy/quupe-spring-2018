import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ItemThumbnail from '../../components/ItemThumbnail';

import styles from './styles';
import { assetColors } from '../../assets/styles';

const BorrowForm = props => (
    <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.itemListWrapper}
    >
        <TouchableOpacity onPress={() => props.navigation.pop()}>
            <View style={styles.itemTextInputWrapper}>
                <Ionicons
                    style={styles.ionicon}
                    name="ios-search-outline"
                    size={15}
                    color={assetColors.darkGrey}
                />

                <Text style={styles.itemTextInput}>{props.ItemFilter}</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.pop()}>
            <View style={styles.locationTextWrapper}>
                <Ionicons
                    style={styles.ionicon}
                    name="ios-pin"
                    size={30}
                    color={assetColors.darkYellow}
                />
                <Text style={styles.locationText}>{props.address}</Text>
            </View>
        </TouchableOpacity>

        {/* TODO: Create slider for filtering by price and distance */}
        {/* <View style={styles.btnWrapper}>
            <TouchableOpacity style={styles.buttons}>
                <Text style={{ color: assetColors.darkBlue }}>Distance</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons}>
                <Text style={{ color: assetColors.darkBlue }}>Price</Text>
            </TouchableOpacity>
        </View> */}

        <View style={styles.itemList}>
            {props.itemData.map(item =>
                item && (
                    <ItemThumbnail
                        itemData={item}
                        key={item.id}
                        navigation={props.navigation}
                    />
                ))}
        </View>
    </ScrollView>
);

BorrowForm.defaultProps = {
    ItemFilter: '',
    address: ''
};
BorrowForm.propTypes = {
    itemData: PropTypes.arrayOf(PropTypes.object).isRequired,
    ItemFilter: PropTypes.string,
    address: PropTypes.string,
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired
};

export default connect(state => ({
    ItemFilter: state.ItemFilter.input,
    address: state.Location.address
}))(BorrowForm);
