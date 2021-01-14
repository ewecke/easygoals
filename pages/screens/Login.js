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

export default class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  onLogin = async () => {
    const { email, password } = this.state;
    try {
      if (email.length > 0 && password.length > 0) {
        this.props.navigation.navigate('App');
      }
    } catch (error) {
      alert(error);
    }
  };

  goToSignup = () => this.props.navigation.navigate('Signup');
  render() {
    const { email, password } = this.state;

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.logo}>EasyGoal</Text>
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
        <View>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '80%' }}>
          <TouchableOpacity style={styles.loginBtn}>
            <Button
              style={styles.loginText}
              title="Login"
              onPress={this.onLogin}
            />
          </TouchableOpacity>
          <Button title="Go to Signup" onPress={this.goToSignup} />
        </View>
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

// dark purple #4b0082
