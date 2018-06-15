import React from 'react';
import { assetColors } from '../assets/styles';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeContainer from '../screens/Home';
import BorrowContainer from '../screens/Borrow';
import LendContainer from '../screens/Lend';
import AccountContainer from '../screens/Account';
import SignInContainer from '../screens/SignIn';

const homeStack = createStackNavigator(
  {
    Home: HomeContainer
  },
  {
    navigationOptions: ({ navigation }) => ({
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
    navigationOptions: ({ navigation }) => ({
      title: 'Lend',
      headerTitleStyle: { color: assetColors.white }
    })
  }
);

const accountStack = createStackNavigator(
  {
    Account: AccountContainer
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: 'Account',
      headerTitleStyle: { color: assetColors.white }
    })
  }
);

const signInStack = createStackNavigator({
  SignIn: SignInContainer
})

const authSwitch = createSwitchNavigator(
  {
    Home: homeStack,
    Auth: signInStack
  },
  {
    initialRouteName: 'Auth'
  }
)

export default createBottomTabNavigator(
  {
    Home: homeStack,
    Borrow: borrowStack,
    Lend: lendStack,
    Account: accountStack,
    SignIn: signInStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Borrow') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        } else if (routeName === 'Lend') {
          iconName = `ios-add${focused ? '' : '-outline'}`;
        } else if (routeName === 'Account') {
          iconName = `ios-contact${focused ? '' : '-outline'}`;
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
