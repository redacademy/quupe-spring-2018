import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import MaskTabBar from 'react-native-scrollable-tab-view-mask-bar';
import PropTypes from 'prop-types';

import styles from './styles';
import Popular from '../Popular';
import Category from '../Category';

class HomeContainer extends Component {
    // static navigationOptions = { header: null };
    render() {
        return (
            <ScrollableTabView
                style={styles.tabUnderlineStyle}
                contentContainerStyle={{ flex: 1 }}
                renderTabBar={() => (
                    <MaskTabBar
                        someProp="here"
                        showMask
                        maskMode="light"
                        style={{
                            backgroundColor: '#ffffff',
                            borderBottomWidth: 0
                        }}
                    />
                )}
            >
                <Popular
                    tabLabel="Popular"
                    navigation={this.props.navigation}
                />
                <Category
                    tabLabel="Category"
                    navigation={this.props.navigation}
                />
            </ScrollableTabView>
        );
    }
}

HomeContainer.propTypes = {
    navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired
};

export default HomeContainer;
