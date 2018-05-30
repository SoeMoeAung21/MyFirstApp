import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, ScorllView, Image, TouchableHighlight, KeyboardAvoidingView, TextInput, MaskedViewIOS, Animated } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';
import ImageSlider from 'react-native-image-slider';



const instructions = Platform.select({

});


export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state={
      fadeAnim: new Animated.Value(0),
    }
  }

  componentDidMount(){
      Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();

  }



  render() {
    return (
      <KeyboardAvoidingView backfaceVisibility={'hidden'} style={styles.KeyboardAvoidingViewStyle} behavour={'position'}>
        <Animated.Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxIFmVloHQwJIzO5LJhK5akIkcgKhkTy4jc858j8jPUF5sEKdYJQ'}} style={styles.firstImageStyle}/>
        <MaskedViewIOS
           style={{ flex: 0.3, flexDirection: 'row', height: '100%' }}
           maskElement={
             <View style={{
               backgroundColor: 'transparent',
               flex: 1,
               justifyContent: 'center',
               alignItems: 'center',
             }}>
               <Text style={{
                 fontSize: 60,
                 color: 'black',
                 fontWeight: 'bold',
               }}>
                 PURIDEA
               </Text>
             </View>
           }
         >
           <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
           <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
           <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
        </MaskedViewIOS>
        <View style={styles.imageSliderStyle}>
          <ImageSlider loopBothSides
          autoPlayWithInterval={3000}
           images={['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNNjO_UJ0EnsDLZcO4ZKieg47QjzOxNSy9RS790B5-EsbAhuWnTw','https://hdqwalls.com/wallpapers/spiderman.jpg',
          'https://www.hdwallpapers.in/walls/spider_man_homecoming_2017_hd-wide.jpg']}/>
        </View>
        <View style={styles.loginTypeStyle}>
          <View style={styles.textStyle}>
            <Text style={styles.userNameTextStyle}>User Name : </Text>
            <Text>Password : </Text>
          </View>
          <View style={styles.textInputStyle}>
            <TextInput style={styles.userNameStyle}>
            </TextInput>
            <TextInput style={styles.passwordStyle} secureTextEntry={true}>
            </TextInput>
          
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }


}



const styles = StyleSheet.create({
KeyboardAvoidingViewStyle:{
  flex: 1,
},
firstImageStyle:{
  alignSelf: 'center',
  width: 150,
  height: 150,
  backgroundColor: 'transparent',
  marginTop: 10
},
imageSliderStyle:{
  flex: 0.4,
},
loginTypeStyle:{
  marginTop: 30,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent:'center'
},
userNameTextStyle:{
  marginBottom: 10
},
userNameStyle:{
  width: 200,
  borderWidth: 1,
  borderRadius: 10,
  marginBottom: 10
},
passwordStyle:{
  width: 200,
  borderWidth: 1,
  borderRadius: 10,
}
});
