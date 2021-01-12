import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Icon from '@expo/vector-icons/AntDesign';

export default class Login extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ backgroundColor: '#FFF', height: '100%' }}>
        <View style={styles.boxtwo}>
          <Text style={styles.name}>Hi, Goal Maker</Text>
          <Text style={styles.subtitle}>Let's set some goals!</Text>
        </View>
        {/*  <Image
          source={require('../images/image2.jpg')}
          style={{ width: '100%', height: '43%' }}
        /> */}
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
            marginTop: 30,
            paddingHorizontal: 10,
            borderColor: '#7ac8e4',
            borderRadius: 23,
            paddingVertical: 2,
          }}
        >
          {/* <Icon name="mail" color="#136df3" size={24} />
          <TextInput style={{ paddingHorizontal: 10 }} /> */}

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
            borderColor: '#7ac8e4',
            borderRadius: 23,
            paddingVertical: 2,
          }}
        >
          {/* <Icon name="mail" color="#136df3" size={24} />
          <TextInput style={{ paddingHorizontal: 10 }} /> */}
          <TextInput
            placeholder="Password"
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
            Already a member
          </Text>
        </View>
        <Text
          onPress={() => navigate('Register')}
          style={{
            alignSelf: 'center',
            color: '#136df3',
            fontFamily: 'SemiBold',
            paddingVertical: 20,
          }}
        >
          New User
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxtwo: {
    flex: 0.8,
    paddingLeft: '5%',
    paddingTop: '15%',
    backgroundColor: '#7ac8e4',
    borderBottomEndRadius: 100,
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
    color: '#146cef',
  },
});
