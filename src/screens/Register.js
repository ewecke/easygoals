import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Login extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: '#FFF', height: '100%' }}>
        <View style={styles.boxtwo}>
          <Text style={styles.name}>Hi, Goal Maker</Text>
          <Text style={styles.subtitle}>Let's set our goals!</Text>
        </View>
        <Text style={styles.appName}>EasyGoal</Text>
        <Text
          style={{
            fontFamily: 'SemiBold',
            marginHorizontal: 35,
            textAlign: 'center',
            marginTop: 5,
            opacity: 0.4,
          }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </Text>

        <View
          style={{
            lexDirection: 'row',
            alignItem: 'center',
            marginHorizontal: 35,
            borderWidth: 2,
            marginTop: 40,
            paddingHorizontal: 10,
            borderColor: '#146cef',
            borderRadius: 23,
            paddingVertical: 2,
          }}
        >
          <TextInput
            placeholder="Email"
            placeholderTextColor="#136df3"
            style={{ paddingHorizontal: 10 }}
          />
        </View>

        <View
          style={{
            lexDirection: 'row',
            alignItem: 'center',
            marginHorizontal: 35,
            borderWidth: 2,
            marginTop: 15,
            paddingHorizontal: 10,
            borderColor: '#146cef',
            borderRadius: 23,
            paddingVertical: 2,
          }}
        >
          <TextInput
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#136df3"
            style={{ paddingHorizontal: 10 }}
          />
        </View>

        <View
          style={{
            lexDirection: 'row',
            alignItem: 'center',
            marginHorizontal: 35,
            borderWidth: 2,
            marginTop: 15,
            paddingHorizontal: 10,
            borderColor: '#146cef',
            borderRadius: 23,
            paddingVertical: 2,
          }}
        >
          <TextInput
            secureTextEntry
            placeholder="Confirm Password"
            placeholderTextColor="#136df3"
            style={{ paddingHorizontal: 10 }}
          />
        </View>
        <View
          style={{
            marginHorizontal: 35,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            backgroundColor: '#7ac8e4',
            paddingVertical: 10,
            borderRadius: 23,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontFamily: 'SemiBold',
            }}
          >
            Register
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxtwo: {
    flex: 0.8,
    paddingLeft: '5%',
    paddingTop: '15%',
    backgroundColor: '#fcbc84',
    borderBottomLeftRadius: 100,
  },
  name: {
    fontSize: 38,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
  },
  appName: {
    fontSize: 35,
    fontFamily: 'SemiBold',
    marginLeft: '15%',
    marginTop: '3%',
    marginBottom: '1%',
    color: '#fcbc84',
  },
});
