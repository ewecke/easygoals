import React, { Component } from 'react';
import {StyleSheet, Text, Image, View } from 'react-native';

export default class Touchables extends Component {
  

  render() {

    return (
      <View style={styles.container}>
          <View style={styles.profile}>
            <Image style={styles.profilePhoto} source={require("./images/profile_1.jpg")}/>
            <Image style={styles.editIconPhoto} source={require("./images/edit-icon.jpg")}/>
            <Text style={styles.profileName}>linus torvalds <Image style={styles.editIcon} source={require("./images/edit-icon.jpg")}/></Text>
            <Text style={styles.profileEmail}>l.torvalds@whatever.com <Image style={styles.editIcon} source={require("./images/edit-icon.jpg")}/></Text>
            <Text style={styles.profileGoals}>80% on target</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    alignItems: 'center'
  },

  profilePhoto: {
    margin:10,
    width: 200,
    height:200,
    alignItems: 'center',
    borderRadius:100
  },

  profileName: {
    margin:10,
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
  },
  profileEmail: {
    margin:10,
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
  },
  profileGoals:{
    margin:10,
    textAlign: 'center',
    color: '#cccccc',
    fontSize: 34,
  },
  editIcon:{
    width: 20,
    height:20,
  },
  editIconPhoto:{
    marginTop:-40,
    marginBottom:20,
    width: 20,
    height:20,
  },

});