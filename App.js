/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Router, Scene, Actions} from 'react-native-router-flux';

import Home from './MainViews/Home';
import CommonGridView from './MainViews/CommonGridView';
import TownDetailView from './MainViews/TownDetailView';
import FunnyFactsView from './MainViews/FunnyFactsView';
import LoginView from './MainViews/LoginView';
import FileView from './MainViews/File';
import TestView from './MainViews/TestView';


export default class App extends React.Component {
  render() {
    return (
      <Router>
      <Scene key='root'>
        <Scene key='Home' initial={true} component={Home} title='Home' onRight={()=>this.file()} rightTitle='File'/>
        <Scene key='CommonGridView'  component={CommonGridView} titleStyle={styles.titleStyle} navigationBarStyle={styles.navBarStyle}/>
        <Scene key='TownDetailView' component={TownDetailView}/>
        <Scene key='FunnyFactsView' component={FunnyFactsView}/>
        <Scene key='File' component={FileView}/>
        <Scene key='testView' component={TestView} title='TestView'/>
        <Scene key='Login'   component={LoginView} type={'reset'} title='Login'/>
      </Scene>
      </Router>
    );
    }

    file(){
      Actions.File()
    }
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navBarStyle:{
    backgroundColor: '#001977',
  },
  titleStyle:{
    color: 'white',
    fontWeight: 'bold'
  }
});
