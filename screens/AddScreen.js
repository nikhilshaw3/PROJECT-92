import React, { Component } from "react";
import {View,Text,TouchableOpacity,TextInput,Modal,Image,Alert,StyleSheet,ScrollView} from "react-native";
import db from "../config";
import firebase from "firebase";
import {RFValue} from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader.js'
import { SearchBar, ListItem, Input } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";

export default class ExerciseScreen extends Component{

constructor(){
super()

this.state = {
userId : firebase.auth().currentUser.email,
poseName : "",
steps: "",
requestId: "",
userDocId: "",
docId: "",
image: "#",
name: "",
}
}

createUniqueId() {
return Math.random().toString(36).substring(7);
}

selectPicture = async () => {
const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
mediaTypes: ImagePicker.MediaTypeOptions.All,
allowsEditing: true,
aspect: [4, 3],
quality: 1,
});
  
if (!cancelled) {
this.uploadImage(uri, this.state.userId);

}
};

uploadImage = async (uri, imageName) => {
  var response = await fetch(uri);
  var blob = await response.blob();
  var ref = firebase
  
  .storage()
  .ref()
  .child("user_profiles/" + imageName);
  
  return ref.put(blob).then((response) => {
  this.fetchImage(imageName);
  });
  };

  fetchImage = (imageName) => {
  var storageRef = firebase
  
  .storage()
  .ref()
  .child("user_profiles/" + imageName);
  
  storageRef
  .getDownloadURL()
  .then((url) => {
  
  this.setState({ image: url });

  })
  .catch((error) => {
  this.setState({ image: "#" });
  });
  };

  getUserProfile() {

    db.collection("users").where("email_id", "==", this.state.userId).onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
    
    this.setState({
    name: doc.data().first_name + " " + doc.data().last_name,
    docId: doc.id,
    image: doc.data().image,
    
    });
    
    });
    });
    }

  componentDidMount() {
    this.fetchImage(this.state.userId);
    this.getUserProfile()
    }

addExercise = async (poseName,steps) =>{
var userId = this.state.userId;
var randomRequestId = this.createUniqueId();

db.collection('all_exercise').add({
user_id: userId,
pose_name: poseName,
steps: steps,
request_id: randomRequestId,
date: firebase.firestore.FieldValue.serverTimestamp(),
})

this.setState({
poseName: "",
steps: "",
requestId: randomRequestId,
});

return Alert.alert("Pose Added Successfully");

}

render(){
return(
<View style={{ flex: 1 }}>
<View style={{ flex: 0.1 }}>

<MyHeader title="ADD AN EXERCISE" navigation={this.props.navigation}/>

</View>

<View style={{ flex: 0.9 }}>

<Input

style={styles.formTextInput}
label={"Name of Exercise or Yoga pose"}
placeholder={"Name of Exercise"}
containerStyle={{ marginTop: RFValue(60) }}

onChangeText={(text) => {

  this.setState({
  poseName: text,
  });
  }}

value={this.state.poseName}

/>

<View style={{ alignItems: "center" }}>

<Input

style={styles.formTextInput1}
containerStyle={{ marginTop: RFValue(30) }}
multiline
numberOfLines={8}
label={"Steps of this Exercise"}
placeholder={"Steps of this Exercise"}

onChangeText={(text) => {

this.setState({
steps: text,
});
}}
value={this.state.steps}

/>

<TouchableOpacity
style={[styles.button, { marginTop: RFValue(30) }]}

onPress={() => {
this.addExercise(this.state.poseName,this.state.steps);

}}
>

<Text style={styles.requestbuttontxt}>Add Exercise</Text>

</TouchableOpacity>
</View>
</View>
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
      keyBoardStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      formTextInput: {
        width: "75%",
        height: RFValue(35),
        borderWidth: 1,
        padding: 10,
      }, formTextInput1: {
        width: "75%",
        height: RFValue(100),
        borderWidth: 1,
        padding: 10,
      },
      ImageView:{
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center",
        marginTop:20
      },
      imageStyle:{
        height: RFValue(150),
        width: RFValue(150),
        alignSelf: "center",
        borderWidth: 5,
        borderRadius: RFValue(10),
      },
      bookstatus:{
        flex: 0.4,
        alignItems: "center",
    
      },
      requestedbookName:{
        fontSize: RFValue(30),
        fontWeight: "500",
        padding: RFValue(10),
        fontWeight: "bold",
        alignItems:'center',
        marginLeft:RFValue(60)
      },
      status:{
        fontSize: RFValue(20),
        marginTop: RFValue(30),
      },
      bookStatus:{
        fontSize: RFValue(30),
        fontWeight: "bold",
        marginTop: RFValue(10),
      },
      buttonView:{
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
      },
      buttontxt:{
        fontSize: RFValue(18),
        fontWeight: "bold",
        color: "#fff",
      },
      touchableopacity:{
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        width: "90%",
      },
      requestbuttontxt:{
        fontSize: RFValue(20),
        fontWeight: "bold",
        color: "#fff",
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
      },
        
  });