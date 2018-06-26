import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import MaskTabBar from 'react-native-scrollable-tab-view-mask-bar';

import styles from './styles';
import Popular from '../Popular';
import Category from '../Category';

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
