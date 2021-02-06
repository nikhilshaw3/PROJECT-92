import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ExerciseScreen from '../screens/ExerciseScreen';
import ImportantTerms  from '../screens/ImportantTermsScreen';

export const AppStackNavigator = createStackNavigator({
    ImportantTerms : {
        screen : ImportantTerms,
        navigationOptions:{
          headerShown : false
        }
      },
    ExerciseScreen : {
    screen : ExerciseScreen,
    navigationOptions:{
      headerShown : false
    }
  },
},
  {
    initialRouteName: 'ImportantTerms'
  }
);
