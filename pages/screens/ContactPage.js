import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, TextInput } from 'react-native';

const width_proportion80 = '80%';

class ContactPage extends React.Component {
  constructor()
  {
    super();
    this.state={
        name:'',
        nameError:'',
        email:'',
        emailError:'',
        message:'',
        messageError:'',
    }
  }

  nameValidator(){
    if(this.state.name=="")
    {
      this.setState({nameError:"Sorry your name empty"})
    }
    else
    {
      this.setState({nameError:""})
    }
  }

  emailValidator(){
    if(this.state.email=="")
    {
      this.setState({emailError:"Sorry your e-mail empty"})
    }
    else
    {
      this.setState({emailError:""})
    }
  }

  messageValidator(){
    if(this.state.message=="")
    {
      this.setState({messageError:"Sorry your message is empyty"})
    }
    else
    {
      this.setState({emailError:""})
    }
  }

  submit(){
    console.warn(this.state)
  }

  clear(){
    /* do not clean the textInput field only the state needs a FIX */
    this.setState({name:""})
    this.setState({email:""}) 
    this.setState({message:""})
    this.setState({nameError:""})
    this.setState({emailError:""}) 
    this.setState({messageError:""})
  }

  render() {
    return (
      <View style={styles.container}>

        <Image style={styles.contactUsBanner} source={require("../../assets/conatct-us-banner-1600x500.jpg")}/>
        
        <Text style={styles.txtContacUs}>We happy to hear you</Text>

        <TextInput
          placeholder="Your name"
          onBlur={()=>this.nameValidator()}
          onChangeText={(text) => {this.setState({name: text})}}
          style={styles.textInput}
        />
        <Text style={styles.txtError}>{this.state.nameError}</Text>

        <TextInput
          placeholder="Your E-mail"
          onBlur={()=>this.emailValidator()}
          onChangeText={(text) => {this.setState({email: text})}}
          style={styles.textInput}
        />
        <Text style={styles.txtError}>{this.state.emailError}</Text>
        
        <TextInput
          placeholder="Your Messege"
          onBlur={()=>this.messageValidator()}
          onChangeText={(text) => {this.setState({message: text})}}
          style={styles.textInput}
        />
        <Text style={styles.txtError}>{this.state.messageError}</Text>
        
        <View style={styles.btSub}>
        <Button title="Submit"  onPress={()=>{this.submit()}}/>
        </View>

        <View style={styles.btSub}>
        <Button title="Clear" onPress={()=>{this.clear()}}/>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  contactUsBanner:{
   height:200,
  },

  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtContacUs: {
    fontSize:20,
    margin:20,
    color:'#666666'
  },

  textInput: {
    paddingLeft:10,
    width: width_proportion80,
    borderRadius:4,
    borderWidth:1,
    borderColor:'#666666',
  },

  btSub: {
    width: width_proportion80,
    marginBottom:20,
  },

  txtError: {
    width: width_proportion80,
    marginBottom:10,
    color: 'red',
  },

});

export default ContactPage;
