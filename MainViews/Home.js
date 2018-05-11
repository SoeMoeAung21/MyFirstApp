import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, ScorllView, Image, TouchableHighlight } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';


import styles from './MainViewStyles/HomeStyle';

const instructions = Platform.select({

});


export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state={
      homeData:[],
      refreshing: false
    }
  }

  componentDidMount(){
    return fetch('http://localhost:3000/homeitems')
    .then((response)=>response.json())
    .then((responseJson)=>this.changingJson(responseJson))
    .catch((error)=>{console.log("error :: " + error);})
  }

  changingJson(responseJson){

    this.setState({
      homeData: responseJson
    })
  }



  render() {
    return (
        <FlatList
          style={styles.flatListstyle}
          data={this.state.homeData}
          renderItem={({item})=>this.renderListItem(item)}
          onRefresh={()=>this.refreshingFunction()}
          refreshing={this.state.refreshing}
          keyExtractor={(item, index) => index}
        />
    );
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
      <TouchableHighlight onPress={()=>this.handleItemPress(item)} underlayColor={'transparent'}>
        <View style={styles.eachViewStyle}>
          <Image style={styles.imagestyle} source={{uri:item.image}}/>
          <Text style={styles.textStyle}>{item.name}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  handleItemPress(item){
    if(item.type === "grid"){
      Actions.CommonGridView({item: item, title: item.name})
    }else{
      Actions.FunnyFactsView({item: item, title: item.name})
    }
  }
}
