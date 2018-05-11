import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, ScorllView, Image, TouchableHighlight } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';



const instructions = Platform.select({

});


export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state={
      nameOfButton : this.props.buttonName,
      textColor: this.props.color
    }
  }

  componentDidMount(){

  }



  render() {
    return (
      <TouchableHighlight onPress={()=>this.button()} underlayColor='transparent'>
        <View style={styles.buttonViewStyle}>
          <Text style={[styles.buttonTextStyle, {color: this.state.textColor}]}>Button is {this.state.nameOfButton}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  button(){
    alert('aaa')
  }
}
const styles = StyleSheet.create({
buttonViewStyle:{
  width: 100,
  height: 30
},
buttonTextStyle:{
  fontSize: 14,
  fontWeight: 'bold'
}

});
