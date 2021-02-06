import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import AddScreen from '../screens/AddScreen';
import Setting from '../screens/SettingScreen';

import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  HOME : {
    screen : AppTabNavigator,
    
    navigationOptions:{
      drawerIcon : <Icon name="home" type ="fontawesome5" />,
      marginTop: '2000'
    }
    },
  AddScreen : {
    screen : AddScreen,
    navigationOptions:{
      drawerIcon : <Icon name="gift" type ="font-awesome" />,
      drawerLabel : "ADD EXERCISE",
      marginTop: '2000'
    }
  },
  Setting : {
    screen : Setting,
    navigationOptions:{
      drawerIcon : <Icon name="settings" type ="fontawesome5" />,
      drawerLabel : "SETTING",
      marginTop: '2000'
    }
  },
 
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
