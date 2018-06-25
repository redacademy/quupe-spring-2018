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
import MyItems from '../screens/MyItems';
import MessagesContainer from '../screens/Messages';
import TransactionHistory from '../screens/TransactionHistory';
import Favorites from '../screens/Favorites';
import BorrowedItems from '../screens/BorrowedItems';
import LentItems from '../screens/LentItems';
import SignUpContainer from '../screens/SignUp';
import WelcomeContainer from '../screens/Welcome';
import AuthLoadingContainer from '../screens/AuthLoading';

export const MessagesModal = createStackNavigator(
    {
        Messages: MessagesContainer
    },
    {
        navigationOptions: ({ navigation }) => ({
            headerStyle: {}
        })
    }
);

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
        Account: AccountContainer,
        Favorites,
        MyItems,
        BorrowedItems,
        LentItems,
        MessagesContainer,
        TransactionHistory
    },
    {
        navigationOptions: ({ navigation }) => ({
            title: 'Account',
            headerTitleStyle: { color: assetColors.white }
        })
    }
);

const authStack = createStackNavigator({
    SignIn: SignInContainer,
    SignUp: SignUpContainer

    // TODO: Add a home page to complete the authStack navigator
});

const authSwitch = createSwitchNavigator(
    {
        Welcome: WelcomeContainer,
        SignUp: SignUpContainer,
        SignIn: SignInContainer
    },
    {
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                position: 'absolute',
                backgroundColor: 'transparent',
                zIndex: 100,
                top: 0,
                left: 0,
                right: 0,
                borderBottomWidth: 0
            }
        })
    }
);

const appStack = createBottomTabNavigator(
    {
        Home: homeStack,
        Borrow: borrowStack,
        Lend: lendStack,
        Account: accountStack
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

export default createSwitchNavigator(
    {
        AuthLoading: AuthLoadingContainer,
        App: appStack,
        Auth: authStack
    },
    {
        initialRouteName: 'AuthLoading'
    }
);
