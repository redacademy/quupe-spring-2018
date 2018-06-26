import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import MaskTabBar from 'react-native-scrollable-tab-view-mask-bar';

import styles from './styles';
import Popular from '../Popular';
import Category from '../Category';

import gql from 'graphql-tag';

const itemData = gql`
    query {
        allItems(filter: { category: "CategoryEnum" }) {
            title
            originalPrice
            image
            condition
            year
            category
            price
            priceOneWeek
            priceOneMonth
            description
            latitude
            longitude
        }
    }
`;

class HomeContainer extends Component {
    static navigationOptions = { header: null };
    render() {
        return (
            <ScrollableTabView
                style={styles.tabUnderlineStyle}
                renderTabBar={() => (
                    <MaskTabBar
                        someProp={'here'}
                        showMask={true}
                        maskMode="light"
                        style={{ backgroundColor: '#ffffff' }}
                    />
                )}
            >
                <Popular tabLabel="Popular" />
                <Category tabLabel="Category" />
            </ScrollableTabView>
        );
    }
}

export default HomeContainer;
