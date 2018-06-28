import React from 'react';
import { assetColors } from '../assets/styles';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator
} from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';

import HomeContainer from '../screens/Home';
import BorrowContainer from '../screens/Borrow';
import LendContainer from '../screens/Lend';
import AccountContainer from '../screens/Account';
import BioContainer from '../screens/Bio';
import SignInContainer from '../screens/SignIn';
import MyItems from '../screens/MyItems';
import Messages from '../screens/Messages';
import TransactionHistory from '../screens/TransactionHistory';
import Favorites from '../screens/Favorites';
import BorrowedItems from '../screens/BorrowedItems';
import LentItems from '../screens/LentItems';
import SignUpContainer from '../screens/SignUp';
import WelcomeContainer from '../screens/Welcome';
import AuthLoadingContainer from '../screens/AuthLoading';
import SingleItemContainer from '../screens/SingleItem';
import CalendarContainer from '../screens/Calendar';
import BorrowFormContainer from '../screens/BorrowForm';
import CategoryItemContainer from '../screens/CategoryItems';

const itemStack = createStackNavigator(
    {
        Item: SingleItemContainer,
        Calendar: CalendarContainer
    },
    {
        headerMode: 'none'
    }
);

const homeStack = createStackNavigator(
    {
        Home: HomeContainer,
        Category: CategoryItemContainer,
        Item: SingleItemContainer,
        Calendar: CalendarContainer
    },
    {
        navigationOptions: ({ navigation }) => ({
            headerTitle: (
                <Image
                    source={require('../assets/images/qp_blue_org.png')}
                    style={{ width: 100, height: 50 }}
                />
            ),
            headerTitleStyle: {
                color: assetColors.white
            },
            headerStyle: {
                backgroundColor: assetColors.white,
                height: 50
            },
            headerMode: 'screen'
        })
    }
);

const borrowStack = createStackNavigator(
    {
        Borrow: BorrowContainer,
        BorrowForm: BorrowFormContainer
    },
    {
        navigationOptions: ({ navigation }) => ({
            title: 'Borrow',
            headerTitleStyle: { color: assetColors.white }
        }),
        headerMode: 'none'
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
const itemStack = createStackNavigator(
    {
        Item: SingleItemContainer,
        Calendar: CalendarContainer
    },
    {
        headerMode: 'none'
    }
);

const accountStack = createStackNavigator(
    {
        Account: AccountContainer,
        Favorites,
        MyItems,
        BorrowedItems,
        LentItems,
        Messages,
        TransactionHistory,
        Item: SingleItemContainer,
        Calendar: CalendarContainer,
        Bio: BioContainer
    },
    {
        navigationOptions: ({ navigation }) => ({
            title: 'Account',
            headerTitleStyle: { color: assetColors.white }
        }),
        headerMode: 'none'
    }
);

const authSwitch = createStackNavigator(
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
                return <Ionicons name={iconName} size={35} color={tintColor} />;
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
        Auth: authSwitch
    },
    {
        initialRouteName: 'AuthLoading'
    }
);
