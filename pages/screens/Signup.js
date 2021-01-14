import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class Signup extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  handleConfirmPasswordChange = (confirmPassword) => {
    this.setState({ confirmPassword });
  };

  onSignup = async () => {
    const { email, password, confirmPassword } = this.state;
    try {
      if (
        email.length > 0 &&
        password.length > 0 &&
        confirmPassword.length > 0
      ) {
        this.props.navigation.navigate('App');
      }
    } catch (error) {
      alert(error);
    }
  };

  signupOrBackToLogIn = () => this.props.navigation.navigate('Login');
  render() {
    const { email, password, confirmPassword } = this.state;

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.logo}>Sign Up</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            name="email"
            value={email}
            placeholder="Email/Username..."
            placeholderTextColor="#4b0082"
            autoCapitalize="none"
            onChangeText={this.handleEmailChange}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            name="password"
            value={password}
            placeholder="Enter password"
            placeholderTextColor="#4b0082"
            secureTextEntry
            onChangeText={this.handlePasswordChange}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm password"
            placeholderTextColor="#4b0082"
            secureTextEntry
            onChangeText={this.handleConfirmPasswordChange}
          />
        </View>
        <View style={{ width: '80%' }}>
          <TouchableOpacity style={styles.loginBtn}>
            <Button
              style={styles.loginText}
              title="Sign up"
              onPress={this.onSignup}
            />
          </TouchableOpacity>
        </View>
        <Button
          style={styles.loginText}
          title="Go to Login"
          onPress={this.signupOrBackToLogIn}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7ac8e4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#4b0082',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 10,
  },
  forgot: {
    marginBottom: 10,
    color: '#4b0082',
    fontSize: 14,
  },
  loginBtn: {
    backgroundColor: '#fcbc84',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});
