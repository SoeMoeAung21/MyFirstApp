import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighLight, Dimensions} from 'react-native';
var device = Dimensions.get('window');

const styles = StyleSheet.create({
flatListstyle:{
  marginTop: 10,
  flex: 1,
},
eachViewStyle:{
  backgroundColor:'white',
  alignSelf: 'center',
  alignItems:'center',
  width: device.width - 20,
  flexDirection: 'row',
  marginBottom: 15,
  borderRadius: 10,
  shadowOffset:{  width: 10,  height: 10},
  shadowColor: '#555555',
  shadowOpacity: 0.7,
},
imagestyle:{
  marginLeft: 10,
  height: 80,
  width: 200
},
textStyle:{
  marginLeft: 10,
  fontSize: 30,
  fontWeight: 'bold'
}
});

export default styles;
