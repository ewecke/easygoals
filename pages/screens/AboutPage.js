import React, { useCallback, useRef, useEffect } from "react";
import { Alert, Animated, Linking, StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

const linkedinEdgar = "https://www.linkedin.com/in/edgar-weckelmann-gandolfi/";
const githubEdgar = "https://github.com/ewecke/easygoals";

const OpenURLText = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <TouchableOpacity onPress={handlePress}><Text style={styles.txtLinks}>{children}</Text></TouchableOpacity>;
};

class AboutPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.aboutUsBanner} source={require("../../assets/about-us.png")}/>
        <Text style={styles.txtAboutUs}>We are students of Class FBW28 at the DCI school in Berlin, this is our final project</Text>
        <Text style={styles.titleAboutUs}>The Squad</Text>
        <FadeInView style={styles.squadCard}>  
          <View style={styles.squadCardL}>
            <Image style={styles.profilePhoto} source={require("../../assets/profile_1.jpg")}/>
          </View>
          <View style={styles.squadCardR}>
            <Text style={styles.txtName}>Linus Trovalds</Text>
            <Text style={styles.txtAboutUs}>Linus Trovalds</Text>
            <OpenURLText url={linkedinEdgar}>LinkedIn</OpenURLText>
            <OpenURLText url={githubEdgar}>GitHub</OpenURLText>
          </View>
        </FadeInView>

        <FadeInView style={styles.squadCard}>  
          <View style={styles.squadCardL}>
            <Image style={styles.profilePhoto} source={require("../../assets/profile_1.jpg")}/>
          </View>
          <View style={styles.squadCardR}>
            <Text style={styles.txtName}>Linus Trovalds</Text>
            <Text style={styles.txtAboutUs}>Linus Trovalds</Text>
            <OpenURLText url={linkedinEdgar}>LinkedIn</OpenURLText>
            <OpenURLText url={githubEdgar}>GitHub</OpenURLText>
          </View>
        </FadeInView>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
        flex:1,
    backgroundColor: '#ffffff',
  },
  
  squadCard:{
    flex:1,
    flexDirection:'row',
  },

  aboutUsBanner: {
    height:200,
   },

  txtName:{
    marginTop:20,
    marginLeft:20,
    fontSize: 25,
  },

  txtAboutUs: {
    margin:20,
  },

  titleAboutUs: {
    fontSize:20,
    marginLeft:20,
  },

  profilePhoto: {
    marginTop:20,
    marginLeft:20,
    width: 150,
    height:150,
    alignItems: 'center',
    borderRadius:25,
  },

  txtLinks:{
    textDecorationLine:'underline',
    color:'blue',
    marginLeft: 20,
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
