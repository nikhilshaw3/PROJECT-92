import React, { Component } from "react";
import {View,Text,TouchableOpacity,TextInput,Modal,Image,Alert,StyleSheet,ScrollView} from "react-native";
import db from "../config";
import firebase from "firebase";
import {RFValue} from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader.js'
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class ExerciseScreen extends Component{

constructor(){
super()

this.state={
firstName: "",
lastName: "",
emailId: "",
contact: "",
docId: ""
}

}

getUserDetails = ()=>{
var email = firebase.auth().currentUser.email;

db.collection("users").where("email_id","==",email).get().then((snapshot)=>{
snapshot.forEach((doc)=>{
var data = doc.data();

this.setState({
firstName: data.first_name,
emailId: data.email_id,
lastName: data.last_name,
contact: data.contact,
docId: doc.id,
})
})
})
}

updateUserDetails = () => {
db.collection("users").doc(this.state.docId).update({
first_name: this.state.firstName,
last_name: this.state.lastName,
contact: this.state.contact,
})
Alert.alert("Profile Updated Successfully");
}

componentDidMount(){
this.getUserDetails()
}

render(){
return(
  
<SafeAreaProvider style={{ flex: 1 }}>
<SafeAreaProvider style={{ flex: 0.12 }}>

<MyHeader title="SETTINGS" navigation={this.props.navigation} />

</SafeAreaProvider>


<SafeAreaProvider style={styles.formContainer}>

<SafeAreaProvider
style={{
flex: 0.66,
padding: RFValue(10),
}}
>

<Text style={styles.label}>First Name </Text>

<TextInput
style={styles.formTextInput}
placeholder={"First Name"}
maxLength={12}
onChangeText={(text) => {

this.setState({
firstName: text,
});
}}
value={this.state.firstName}
/>

<Text style={styles.label}>Last Name </Text>

<TextInput
style={styles.formTextInput}
placeholder={"Last Name"}
maxLength={12}
onChangeText={(text) => {

this.setState({
lastName: text,
});
}}
value={this.state.lastName}
/>

<Text style={styles.label}>Contact </Text>

<TextInput
style={styles.formTextInput}
placeholder={"Contact"}
maxLength={10}
keyboardType={"numeric"}
onChangeText={(text) => {

this.setState({
contact: text,
});
}}
value={this.state.contact}
/>

</SafeAreaProvider>

<SafeAreaProvider style={styles.buttonView}>

<TouchableOpacity style={styles.button}

onPress={() => {this.updateUserDetails();}}
  
>
<Text style={styles.buttonText}>Save</Text>

</TouchableOpacity>
</SafeAreaProvider>
</SafeAreaProvider>
</SafeAreaProvider>
)
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#6fc0b8"
  },
  formContainer:{
    flex: 0.88,
    justifyContent:'center'
  },
  label:{
    fontSize:RFValue(18),
    color:"#717D7E",
    fontWeight:'bold',
    padding:RFValue(10),
    marginLeft:RFValue(20)
  },
  formTextInput: {
    width: "90%",
    height: RFValue(50),
    padding: RFValue(10),
    borderWidth:1,
    borderRadius:2,
    borderColor:"grey",
    marginBottom:RFValue(20),
    marginLeft:RFValue(20)
  },
  button: {
    width: "75%",
    height: RFValue(60),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(50),
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: RFValue(20),
  },
  buttonView:{
    flex: 0.22,
    alignItems: "center",
    marginTop:RFValue(100)
},
  buttonText: {
    fontSize: RFValue(23),
    fontWeight: "bold",
    color: "#fff",
  },
});
