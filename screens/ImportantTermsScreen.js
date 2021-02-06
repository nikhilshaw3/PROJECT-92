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
<MyHeader title="IMPORTANT TERMS" navigation={this.props.navigation}/>

<Image
source={require('../assets/e.png')}
style={styles.santaImage}
/>

<Text style={{fontWeight: 'bold',fontSize: 18,marginLeft: 10,marginTop: 10}}>THIS IS A FITNESS GUIDE APP
. THIS APP CONTAINS MOST OF THE EXERCISES AND YOGA POSES . IF YOU WANT TO ADD A EXERCISE OR YOGA POSE 
YOU CAN ADD IT . EXERCISE IS VERY IMPORTANT FOR US , EXERCISE KEEPS US FIT . WE ALL NEED TO DO EXERCISE 
EVERY-DAY , MINIMUM 30 MINUTES .
</Text>

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
    },
    santaImage:{
        width:"50%",
        height:"40%",
        resizeMode:"stretch",
        marginTop : 100,
        alignItems: 'center',
        justifyContent: 'center',
    marginLeft: 90,
    marginTop: 10
      },
  });