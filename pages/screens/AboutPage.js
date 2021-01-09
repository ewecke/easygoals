import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class AboutPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ToDoList')}
        >
          <Text style={styles.button}>This is About Page. Change it.</Text>
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

export default AboutPage;
