import React, { Component } from "react";
import {View,Text,TouchableOpacity,TextInput,Modal,Image,Alert,StyleSheet,ScrollView} from "react-native";
import db from "../config";
import firebase from "firebase";
import {RFValue} from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader.js'

export default class ExerciseScreen extends Component{
render(){
return(
<View style={styles.view}>
<MyHeader title="ALL EXERCISES" navigation={this.props.navigation}/>
</View>
)
}

}

const styles = StyleSheet.create({
    subContainer: {
      flex: 1,
      fontSize: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      width: 100,
      height: 30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#32867d",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
    },
    view:{
      flex: 1,
      backgroundColor: "#fff"
    }
  });