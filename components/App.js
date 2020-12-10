import React, {Component} from 'react';
import firebase from 'firebase';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import LoginForm from './LoginForm';
import Articles from './Articles';
import perola from '../img/perola.png'

// create a component
class App extends  Component {
  state={
    LoggedIn:null
  };
  componentDidMount(){
    var firebaseConfig={
      piKey: "AIzaSyCQMhJ2Ost0_xZaasb5bU1IdN0doHoPw_w",
      authDomain: "login-react-97fa7.firebaseapp.com",
      projectId: "login-react-97fa7",
      storageBucket: "login-react-97fa7.appspot.com",
      messagingSenderId: "157580674355",
      appId: "1:157580674355:web:7e0b01fadcfa9d3a30ea46",
      measurementId: "G-69SV74GPVP"
    }
  }
  renderContent=()=>{
    switch (this.state.LoggedIn) {
      case false:
        return <ImageBackground style={styles.container} source={perola}>
          <LoginForm/>
        </ImageBackground>        
      case true:
      return <Articles/>
    }
  }
  render(){
  return (
    <View style={styles.container}>
      {this.renderContent()}
    </View>
  )
}
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width:'100%',
    height:'100%'
   
  },
});

//make this component available to the app
export default App;
