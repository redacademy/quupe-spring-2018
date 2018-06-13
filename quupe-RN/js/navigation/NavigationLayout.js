import React from 'react';
import styles, { assetColors } from '../assets/styles';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeContainer from '../screens/Home';
import BorrowContainer from '../screens/Borrow';
import LendContainer from '../screens/Lend';

const homeStack = createStackNavigator(
  {
    Home: HomeContainer
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      title: 'Home',
      headerTitleStyle: { color: assetColors.white }
    })
  }
);

const borrowStack = createStackNavigator(
  {
    Borrow: BorrowContainer
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      title: 'Borrow',
      headerTitleStyle: { color: assetColors.white }
    })
  }
);

const lendStack = createStackNavigator(
  {
    Lend: LendContainer
  },
  {
    ...sharedNavigationOptions(navigation),
    title: 'Lend',
    headerTitleStyle: { color: assetColors.white }
  }
);

export default createBottomTabNavigator(
  {
    Home: homeStack,
    Lend: lendStack,
    Borrow: borrowStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Borrow') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        } else if (routeName === 'Lend') {
          iconName = `ios-add${focused ? '' : '-outline'}`;
        } else if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: assetColors.darkBlue,
      inactiveTintColor: assetColors.black,
      labelStyle: {
        fontSize: 10
      },
      style: {
        backgroundColor: assetColors.white,
        borderTopColor: assetColors.black,
        borderTopWidth: 1
      }
    }
  }
);
