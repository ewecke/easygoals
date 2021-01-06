import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  ProfileScreen,
  ToDoScreen,
  ShoppingListScreen,
  HealthScreen,
  GoalScreen,
  ContactScreen,
  SignOutScreen,
} from './screens';

import SideBar from './components/SideBar';

const DrawerNavigator = createDrawerNavigator(
  {
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Profile',
        drawerIcon: ({ tintColor }) => (
          <Feather name="user" size={16} color={tintColor} />
        ),
      },
    },
    ToDoScreen: {
      screen: ToDoScreen,
      navigationOptions: {
        title: 'ToDo List',
        drawerIcon: ({ tintColor }) => (
          <Feather name="clipboard" size={16} color={tintColor} />
        ),
      },
    },
    ShoppingListScreen: {
      screen: ShoppingListScreen,
      navigationOptions: {
        title: 'Shopping List',
        drawerIcon: ({ tintColor }) => (
          <Feather name="shopping-cart" size={16} color={tintColor} />
        ),
      },
    },
    HealthScreen: {
      screen: HealthScreen,
      navigationOptions: {
        title: 'Health',
        drawerIcon: ({ tintColor }) => (
          <Feather name="heart" size={16} color={tintColor} />
        ),
      },
    },
    GoalScreen: {
      screen: GoalScreen,
      navigationOptions: {
        title: 'Goals',
        drawerIcon: ({ tintColor }) => (
          <Feather name="target" size={16} color={tintColor} />
        ),
      },
    },
    ContactScreen: {
      screen: ContactScreen,
      navigationOptions: {
        title: 'Contact',
        drawerIcon: ({ tintColor }) => (
          <Feather name="message-square" size={16} color={tintColor} />
        ),
      },
    },
    SignOutScreen: {
      screen: SignOutScreen,
      navigationOptions: {
        title: 'SignOut',
        drawerIcon: ({ tintColor }) => (
          <Feather name="log-out" size={16} color={tintColor} />
        ),
      },
    },
  },
  {
    contentComponent: (props) => <SideBar {...props} />,
    drawerWidth: Dimensions.get('window').width * 0.85,
    hideStatusBar: true,

    contentOptions: {
      activeBackgroundColor: 'rgba(212,188,207,0.2)',
      activeTintColor: '#53115B',
      itemsContainerStyle: {
        marginTop: 16,
        marginHorizontal: 8,
      },
      itemStyle: {
        borderRadius: 4,
      },
    },
  }
);

export default createAppContainer(DrawerNavigator);
