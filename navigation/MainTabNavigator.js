import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MessageScreen from '../screens/MessageScreen';
import NotificationScreen from '../screens/NotificationScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'ios-home'
      }
    />
  ),
};

HomeStack.path = '';

//search stack
const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
  },
  config
);

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'ios-search'} />
  ),
};

SearchStack.path = '';

const MessageStack = createStackNavigator(
  {
    Message: MessageScreen,
  },
  config
);

MessageStack.navigationOptions = {
  tabBarLabel: 'Message',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-mail' : 'ios-mail'} />
  ),
};

MessageStack.path = '';

const NotificationStack = createStackNavigator(
  {
    Notification: NotificationScreen,
  },
  config
);

NotificationStack.navigationOptions = {
  tabBarLabel: 'Notifications',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-notifications-outline`
          : 'ios-notifications-outline'
      }
    />
  ),
};

NotificationStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SearchStack,
  NotificationStack,
  MessageStack,
});

tabNavigator.path = '';

export default tabNavigator;
