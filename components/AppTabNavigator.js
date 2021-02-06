import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import ExerciseScreen from '../screens/ExerciseScreen';


export const AppTabNavigator = createBottomTabNavigator({
  ImportantTerms : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/1.png")} style={{width:35, height:35}}/>,
      tabBarLabel : "IMPORTANT TERMS",
    }
  },
  AllExercise: {
    screen: ExerciseScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/1.png")} style={{width:35, height:35}}/>,
      tabBarLabel : "ALL EXERCISE",
    }
  }
});
