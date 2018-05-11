import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighLight, Dimensions} from 'react-native';
var device = Dimensions.get('window');

const styles = StyleSheet.create({
flatListstyle:{
  flex:1,
  alignSelf: 'center',
},
viewStyle:{
  width: device.width/2.2,
  height: device.height/2.2,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection:'row',
  alignSelf:'center',
  shadowOffset: {width: 10,  height: 10},
  shadowColor: '#555555',
  shadowOpacity: 0.7,
},
imageStyle:{
  width: device.width/2.5 - 5 ,
  height: device.height/2.5 - 5,
  alignItems:'center',
  justifyContent: 'center',
  position: 'absolute'
},
textStyle:{
  fontSize: 30,
  fontWeight: 'bold',
  color: '#000080'
}
});

export default styles;
