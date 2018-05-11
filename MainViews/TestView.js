import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, ScorllView, Image, TouchableHighlight, TouchableOpacity,  PixelRatio } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';



const instructions = Platform.select({

});


export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state={
      avatarSource: null,
      videoSource: null
    }
  }

  componentDidMount(){

  }

    selectPhotoTapped() {
       const options = {
         quality: 1.0,
         maxWidth: 500,
         maxHeight: 500,
         storageOptions: {
           skipBackup: true
         }
       };

    ImagePicker.showImagePicker(options, (response) => {
       console.log('Response = ', response);

       if (response.didCancel) {
         console.log('User cancelled photo picker');
       }
       else if (response.error) {
         console.log('ImagePicker Error: ', response.error);
       }
       else if (response.customButton) {
         console.log('User tapped custom button: ', response.customButton);
       }
       else {
         let source = { uri: response.uri };
         this.setState({
           avatarSource: source
         });
       }
     });
   }

   selectVideoTapped() {
     const options = {
       title: 'Video Picker',
       takePhotoButtonTitle: 'Take Video...',
       mediaType: 'video',
       videoQuality: 'medium'
     };

     ImagePicker.showImagePicker(options, (response) => {
       console.log('Response = ', response);

       if (response.didCancel) {
         console.log('User cancelled video picker');
       }
       else if (response.error) {
         console.log('ImagePicker Error: ', response.error);
       }
       else if (response.customButton) {
         console.log('User tapped custom button: ', response.customButton);
       }
       else {
         this.setState({
           videoSource: response.uri
         });
       }
     });
   }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
          { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
            <Image style={styles.avatar} source={this.state.avatarSource} />
          }
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer]}>
            <Text>Select a Video</Text>
          </View>
        </TouchableOpacity>

        { this.state.videoSource &&
          <Text style={{margin: 8, textAlign: 'center'}}>{this.state.videoSource}</Text>
        }
      </View>
    );
  }


}
const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF'
   },
   avatarContainer: {
     borderColor: '#9B9B9B',
     borderWidth: 1 / PixelRatio.get(),
     justifyContent: 'center',
     alignItems: 'center'
   },
   avatar: {
     borderRadius: 75,
     width: 150,
     height: 150
   }

});
