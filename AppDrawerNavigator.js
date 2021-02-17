import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import chatScreen from '../screens/ChatScreen';
import {AppTabNavigator} from './AppTabNavigator';
import FrendsList from './FriendsList';
import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
    Home : {
        screen : AppTabNavigator
    },
    FriendsList : {
        screen : chatScreen,
        navigationOptions:{
          drawerIcon : <Icon name="gift" type ="font-awesome" />,
          drawerLabel : "Send Message"
        }
      },
    
},

{
    contentComponent : FrendsList
},
{
    initialRouteName : 'ChatScreen'
})