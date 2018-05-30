import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, ScorllView, Image, TouchableHighlight, ScrollView, TouchableOpacity,  PixelRatio, Modal, Dimensions } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
var device = Dimensions.get('window');


var radio_props = [
  {label: 'Male', value: 0 },
  {label: 'Female', value: 1 }
];



const instructions = Platform.select({

});


export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state={
      modalVisible: false,
      value: 0,
    }
  }

  componentDidMount(){

  }



  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}

          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      <View>
        <RadioForm
          style={{alignItems: 'baseline'}}
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.setState({value:value})}}
        />
      </View>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
        <ScrollView>
        <View style={{borderWidth: 1}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <View style={{borderRightWidth: 1, borderBottomWidth: 1, width: device.width/3}}>
          <Text >Brand</Text>
          </View>
          <View style={{ borderBottomWidth: 1, width: device.width/3}}>
          <Text >Quantity</Text>
          </View>
          <View style={{borderLeftWidth: 1, borderBottomWidth: 1, width: device.width/3}}>
          <Text >Price</Text>
          </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{borderRightWidth: 1, borderBottomWidth: 1, width: device.width/3}}>
        <Text >Laptop</Text>
        </View>
        <View style={{ borderBottomWidth: 1, width: device.width/3}}>
        <Text >4</Text>
        </View>
        <View style={{borderLeftWidth: 1, borderBottomWidth: 1, width: device.width/3}}>
        <Text >2000000</Text>
        </View>
        </View>
        </View>
        </ScrollView>

      </View>
    );
  }

  setModalVisible(visible) {
     this.setState({modalVisible: visible});
   }


}
const styles = StyleSheet.create({



});
