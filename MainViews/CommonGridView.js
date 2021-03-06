import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, Image, FlatList} from 'react-native';
import {Router, Scene, Actions} from 'react-native-router-flux';
import RNFS from 'react-native-fs';
import Config from '../Service/Config'
import Utility from '../Service/Utility'

import styles from './MainViewStyles/Division4Style';

export default class Division4 extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      dataSource: [],
      dataItem: this.props.item,
      refreshing: false
    }
  }

  componentDidMount(){

    var service = this
    Utility.getDataFromServer(service.state.dataItem.endpoint).then((result) => service.changingToJson(result))
  }

  changingToJson(responseJson){
    console.log(responseJson);
    this.setState({
      dataSource: responseJson,
    })
  }

  onDownloadImagePress(item) {

        RNFS.downloadFile({
          fromUrl: item.image,
          toFile: `${RNFS.DocumentDirectoryPath}/temp.png`,
        }).promise.then((r) => {

        });

        console.log(RNFS.DocumentDirectoryPath);

    }

  render() {
    return (
      <FlatList
      contentContainerStyle={styles.flatListstyle}
      data={this.state.dataSource}
      numColumns={2}
      renderItem={({item})=>this.renderListItem(item)}
      onRefresh={()=>this.refreshingFunction()}
      refreshing={this.state.refreshing}
      keyExtractor={(item, index) => index}
      />
    )
  }

  refreshingFunction(){
    this.setState({
      refreshing: true
    })
    this.timeoutFunction()
  }

  timeoutFunction(){
    setTimeout(()=>{
      this.setState({
        refreshing: false
      })
    },3000)
  }

  renderListItem(item){
    return(
      <View>
        <TouchableHighlight onPress={()=>this.goToDetailView(item)} underlayColor='transparent'>
            <View style={styles.viewStyle}>
              <Image style={styles.imageStyle} source={{uri:item.image}}/>
              <Text style={styles.textStyle}>{item.name}</Text>
            </View>
        </TouchableHighlight>
      </View>
    )
  }

  goToDetailView(item){
    Actions.TownDetailView({item: item,title:item.name})
    this.onDownloadImagePress(item)
  }

}
