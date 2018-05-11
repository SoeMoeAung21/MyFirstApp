import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighLight, Dimensions} from 'react-native';
var device = Dimensions.get('window');

const styles = StyleSheet.create({
flatListstyle:{
  marginTop: 10,
  flex: 1,
},
viewStyle:{
  backgroundColor:'white',
  alignSelf: 'center',
  alignItems:'center',
  width: device.width - 20,
  marginBottom: 15,
  borderRadius: 10,
  shadowOffset:{  width: 10,  height: 10},
  shadowColor: '#555555',
  shadowOpacity: 0.7,
},
textStyle:{
  marginLeft: 10,
  fontSize: 18,

},
headerViewStyle:{
  alignItems: 'center',
},
headerTextStyle:{
  fontSize: 25,
  fontWeight: 'bold',
  shadowOffset: {width: 5,  height: 3},
  shadowColor: '#003cb3',
  shadowOpacity: 0.8
}
});

export default styles;
