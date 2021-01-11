import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';

import { HelpCircle } from 'react-native-feather';

export default class HelpPage extends Component {
  render() {
    return (
      <Container>
        <Header />

        <Content>
          <HelpCircle
            stroke="#146cef"
            fill="#fff"
            width={130}
            height={130}
            marginLeft="30%"
          />
          <Form style={{ paddingTop: 30 }}>
            <Item>
              <Label style={styles.labels}>Name:</Label>
              <Input />
            </Item>
            <Item>
              <Label style={styles.labels}>E-mail:</Label>
              <Input />
            </Item>
            <Item style={{ paddingBottom: 100 }}>
              <Label style={styles.labels}>Message:</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  labels: {
    paddingTop: 20,
  },
});
/* import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { HelpCircle } from 'react-native-feather';

class HelpPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HelpCircle stroke="grey" fill="#fff" width={130} height={130} />
        <View style={styles.box1}>
          <Text>Need Help?</Text>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    flex: 0.7,
    marginTop: '10%',
    width: '90%',
    borderWidth: 5,
    borderColor: 'grey',
    borderRadius: 50,
  },
});

export default HelpPage;
 */
