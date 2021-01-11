import 'react-native-gesture-handler';
import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons'; //pei-ling code
import Mission from '../screens/mission';
import UserPage from '../screens/UserPage';
import HomePage from '../screens/HomePage';
import ContactPage from '../screens/ContactPage'; //pei-ling code
import AboutPage from '../screens/AboutPage'; //pei-ling code
import SignOutPage from '../screens/SignOutPage'; //pei-ling code
import ImagePickerOn from '../screens/ImagePickerOn' //natia code 



// Import Custom idebar
import CustomSidebarMenu from './CustomSidebarMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function userScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="UserPage">
      <Stack.Screen
        name="UserPage"
        component={UserPage}
        options={{
          title: 'UserPage', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#4b0082', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

///natia code 
function ImagePickerOnScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="ImagePickerOn">
      <Stack.Screen
        name="ImagePickerOn"
        component={ImagePickerOn }
        options={{
          title: 'ImagePickerOn', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#4b0082', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function missionScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Mission">
      <Stack.Screen
        name="Mission"
        component={Mission}
        options={{
          title: 'Mission', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#4b0082', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function homeScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#4b0082', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          title: 'Goal App', //Set Header Title
        }}
      />
      
       <Stack.Screen
        name="ImagePickerOn"
        component={ImagePickerOn}
        options={{
          title: 'Goal App', //Set Header Title by natia
        }}
      /> 

      <Stack.Screen
        name="Mission"
        component={Mission}
        options={{
          headerTransparent: true,

          title: '',
        }}
      />
    </Stack.Navigator>
  );
}

function contactScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="ContactPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#4b0082', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="ContactPage"
        component={ContactPage}
        options={{
          title: 'Goal App', //Set Header Title
        }}
      />

      <Stack.Screen
        name="Mission"
        component={Mission}
        options={{
          headerTransparent: true,

          title: '',
        }}
      />
    </Stack.Navigator>
  );
}

function aboutScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="AboutPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#4b0082', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="AboutPage"
        component={AboutPage}
        options={{
          title: 'Goal App', //Set Header Title
        }}
      />

      <Stack.Screen
        name="Mission"
        component={Mission}
        options={{
          headerTransparent: true,

          title: '',
        }}
      />
    </Stack.Navigator>
  );
}
//burger screens
function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
      >
        <Drawer.Screen
          name="HomePage"
          options={{
            drawerLabel: 'Home', ////pei-ling code 'home' to 'Home'
            drawerIcon: ({ tintColor }) => (
              <Feather name="home" size={16} color={tintColor} />
            ), //pei-ling code
          }}
          component={homeScreenStack}
        />
        <Drawer.Screen
          name="UserPage"
          options={{
            drawerLabel: 'User',
            drawerIcon: ({ tintColor }) => (
              <Feather name="user" size={16} color={tintColor} />
            ), //pei-ling added
          }}
          component={userScreenStack}
        />
        <Drawer.Screen
          name="Mission"
          options={{
            drawerLabel: 'Mission',
            drawerIcon: ({ tintColor }) => (
              <Feather name="target" size={16} color={tintColor} />
            ), //pei-ling added
          }}
          component={missionScreenStack}
        />

        {/* pei-ling added, section one - biggins */}
        <Drawer.Screen
          name="ContactPage"
          options={{
            drawerLabel: 'Contact Us',
            drawerIcon: ({ tintColor }) => (
              <Feather name="message-square" size={16} color={tintColor} />
            ),
          }}
          component={contactScreenStack}
        />
        <Drawer.Screen
          name="AboutPage"
          options={{
            drawerLabel: 'About Us',
            drawerIcon: ({ tintColor }) => (
              <Feather name="users" size={16} color={tintColor} />
            ),
          }}
          component={aboutScreenStack}
        />
        <Drawer.Screen
          name="SignOutPage"
          options={{
            drawerLabel: 'SignOut',
            drawerIcon: ({ tintColor }) => (
              <Feather name="log-out" size={16} color={tintColor} />
            ),
          }}
          component={homeScreenStack}
        />
        {/*  pei-ling added, section one - ends  */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;