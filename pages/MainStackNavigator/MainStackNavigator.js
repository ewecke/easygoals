import 'react-native-gesture-handler';
import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Mission from '../screens/mission';
import UserPage from '../screens/UserPage';
import HomePage from '../screens/HomePage';


// Import Custom Sidebar
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
        name="UsertPage"
        component={ UserPage }
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
      }}>
      


      
      <Stack.Screen
        name="HomePage"
        component={HomePage}
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

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
         <Drawer.Screen
          name="HomePage"
          options={{ drawerLabel: 'home' }}
          component={homeScreenStack}
        />
        <Drawer.Screen
          name="UserPage"
          options={{ drawerLabel: 'User' }}
          component={userScreenStack}
        />

  <Drawer.Screen
          name="Mission"
          options={{ drawerLabel: 'Mission' }}
          component={missionScreenStack}
        />
        
       
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
