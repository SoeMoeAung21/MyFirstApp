import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import Swiper  from 'react-native-swiper';
import Utility from '../Service/Utility'





export default class TownDetailView extends React.Component {

  constructor(props){
    super(props);
    this.state ={

      data: this.props.item
    }
  }

  componentDidMount(){
  }


  render() {
    return (
        <Swiper style={styles.swiperStyle}>
          <View style={styles.view1Style}>
            <Image source={{uri:this.state.data.imageGallery}} style={styles.imageGalleryStyle}/>
          </View>
          <View style={styles.view2Style}>
            <Text style={styles.textStyle}>{this.state.data.about}</Text>
          </View>
        </Swiper>
    );
  }

  callingPhone(){
    Utility.callPhone('09xxxxxxx')
  }
}

const styles = StyleSheet.create({
swiperStyle:{

},
view1Style:{
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
},
imageGalleryStyle:{
  resizeMode: 'center',
  width: 300,
  height: 400
},
view2Style:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#1d5099'
},
textStyle:{
  fontSize: 20,
  fontStyle: 'italic'
}

});
