import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SectionList, ScorllView, Image, TouchableHighlight, ListView} from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';
import MyCustomButton from '../Components/MyButton'

import styles from './MainViewStyles/FunnyFactsViewStyle';

const instructions = Platform.select({

});


export default class FunnyFactsView extends React.Component {

  constructor(props){
    super(props);
    this.state={
      data: [],
      dataItem: this.props.item,
      refreshing: false
    }
  }

  componentDidMount(){
    return fetch('http://localhost:3000/'+ this.state.dataItem.endpoint)
    .then((response)=>response.json())
    .then((responseJson)=>this.changingJson(responseJson))
    .catch((error)=>{console.log("error :: " + error);})
  }

  changingJson(responseJson){

    this.setState({
      data: responseJson
    })

  }


  render() {
    return (
      <SectionList
        renderItem={({ item, index, section }) => this.renderListItem(item, index, section)}
        renderSectionHeader={({ section: { title } }) => this.renderSectionHeaderTitle(title)}
        sections={this.state.data}
        keyExtractor={(item, index) => item + index}
        onRefresh={()=>this.refreshingFunction()}
        refreshing={this.state.refreshing}
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
        refreshing:false
      })
    },3000)
  }

renderListItem(item, index, section){
  return(
    <TouchableHighlight onPress={()=>this.touchingFunction()} underlayColor='transparent'>
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{item.name}</Text>
      <MyCustomButton buttonName={item.name} color={item.color}/>
    </View>
    </TouchableHighlight>
  )
}

renderSectionHeaderTitle(title){
  return(
    <View style={styles.headerViewStyle}>
      <Text style={styles.headerTextStyle}>{title}</Text>
    </View>
  )
}

}
