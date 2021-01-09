import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class SignOutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ToDoList')}
        >
          <Text style={styles.button}>Sign Out Page</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#819dad',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: '#161737',
    borderRadius: 20,
    padding: 10,
    color: '#fff',
    marginBottom: 20,
  },
});

export default SignOutScreen;
