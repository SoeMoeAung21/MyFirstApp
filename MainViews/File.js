import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, ScorllView, Image, TouchableHighlight, Button } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';
import RNFS from 'react-native-fs';
import YouTube from 'react-native-youtube';
import Carousel from 'react-native-snap-carousel';

const instructions = Platform.select({

});


export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state={
      entries: [
                  {
                      title: 'Beautiful and dramatic Antelope Canyon',
                      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                      illustration: 'https://i.imgur.com/UYiroysl.jpg'
                  },
                  {
                      title: 'Earlier this morning, NYC',
                      subtitle: 'Lorem ipsum dolor sit amet',
                      illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
                  },
                  {
                      title: 'White Pocket Sunset',
                      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
                      illustration: 'https://i.imgur.com/MABUbpDl.jpg'
                  },
                  {
                      title: 'Acrocorinth, Greece',
                      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                      illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
                  },
                  {
                      title: 'The lone tree, majestic landscape of New Zealand',
                      subtitle: 'Lorem ipsum dolor sit amet',
                      illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
                  },
                  {
                      title: 'Middle Earth, Germany',
                      subtitle: 'Lorem ipsum dolor sit amet',
                      illustration: 'https://i.imgur.com/lceHsT6l.jpg'
                  }
                ],
                SLIDER_1_FIRST_ITEM : 1
    }

  }

  componentDidMount(){
    //this.fileReadingFunction()
  }

  renderItemWithParallax ({item, index}) {
        return (
            <View style={{backgroundColor:'white', marginLeft: 30}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.title}</Text>
            <Image style={{width: 270, height: 150}} source={{uri:item.illustration}}/>
            </View>
        );
    }

  fileCreatingFunction(){
    var RNFS = require('react-native-fs');

    // create a path you want to write to
    var path = RNFS.DocumentDirectoryPath + '/test.txt';

    // write the file
    RNFS.writeFile(path, 'This is soe moe first created file', 'utf8')
      .then((success) => {
        console.log('FILE WRITTEN!');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  fileReadingFunction(){
    var RNFS = require('react-native-fs');

   // get a list of files and directories in the main bundle
  RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
    .then((result) => {
      console.log('GOT RESULT', RNFS.MainBundlePath);//project
      console.log('GOT RESULT', RNFS.DocumentDirectoryPath);//document

      // stat the first file
      return Promise.all([RNFS.stat(result[0].path), result[0].path]);
    })
    .then((statResult) => {
      if (statResult[0].isFile()) {
        // if we have a file, read it
        return RNFS.readFile(statResult[1], 'utf8');
      }

      return 'no file';
    })
    .then((contents) => {
      // log the file contents
      console.log(contents);
    })
    .catch((err) => {
      console.log(err.message, err.code);
    });
    }



    onDownloadImagePress() {

          RNFS.downloadFile({
            fromUrl: 'https://facebook.github.io/react-native/img/header_logo.png',
            toFile: `${RNFS.DocumentDirectoryPath}/react-native.png`,
          }).promise.then((r) => {
            this.setState({ isDone: true })
          });

          console.log(RNFS.DocumentDirectoryPath);

      }

      render() {
        const preview = this.state.isDone ? (
        <View>
          <Image style={{
            width: 100,
            height: 100,
            backgroundColor: 'black',
          }}
            source={{
              uri: `file://${RNFS.DocumentDirectoryPath}/react-native.png`,
              scale: 1
            }}
          />
          <Text>{`file://${RNFS.DocumentDirectoryPath}/react-native.png`}</Text>
        </View>
        ) : null;
        return (
          <View>
            <Text onPress={()=>this.onDownloadImagePress()}>Download Image</Text>
            {preview}
            <YouTube
              apiKey='AIzaSyAp6qSEGHSXMfKt9QujM6kuFJ0iykOP3tY'
              videoId='ARogJm8IG9I'
              play={false}
              fullscreen={false}
              loop={true}
              style={{ marginTop: 30, alignSelf: 'stretch', height: 300 }}
            />
            <Carousel
              ref={c => this._slider1Ref = c}
              data={this.state.entries}
              layout={'tinder'}
              layoutCardOffset={`18`}
              renderItem={({item, index}) => this.renderItemWithParallax({item, index})}
              sliderWidth={300}
              itemWidth={300}
              hasParallaxImages={true}
              firstItem={0}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              // inactiveSlideShift={20}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContentContainer}
              loop={true}
              loopClonesPerSide={2}
              autoplay={true}
              autoplayDelay={500}
              autoplayInterval={3000}
            />
            <Button onPress={()=>this.buttonFunction()} title='Next View' color='#841584' style={{marginTop: 30}}/>
          </View>
        );
      }
    buttonFunction(){
      Actions.testView()
    }
  }

  const styles = StyleSheet.create({
    slider: {
      marginTop: 15,
      overflow: 'visible'
    },
    sliderContentContainer: {
      paddingVertical: 10,

    },
  });
