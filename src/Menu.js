import * as React from 'react';
import { Image, StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function Feed({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.homePageImage}
        source={{
          uri:
            'https://png.pngtree.com/png-vector/20190820/ourlarge/pngtree-light-bulb-icon-vector--light-bulb-ideas-symbol-illustration-png-image_1694700.jpg',
        }}
      />
      <Text style={styles.textHomePage}>Home</Text>
      <Button title="click me!" onPress={() => navigation.openDrawer()} />
    </View>
  );
}

function Profile() {
  return (
    <View style={styles.eachPage}>
      <Text style={styles.profileTitle}>My profile</Text>
      <Image
        style={styles.eachPageImage}
        source={{
          uri:
            'https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/cat-icon.png',
        }}
      />
      <Text style={styles.eachPageBody}>
        Name: _____________________________
      </Text>
      <Text style={styles.eachPageBody}>
        Email: _____________________________
      </Text>
      <Text style={styles.eachPageBody}>
        Password: _________________________
      </Text>
    </View>
  );
}

function Health() {
  return (
    <View style={styles.eachPage}>
      <Text style={styles.profileTitle}>My Health</Text>
      <Image
        style={styles.eachPageImage}
        source={{
          uri:
            'https://i.pinimg.com/originals/f4/c9/a8/f4c9a88e93317977c3d0921b12309578.png',
        }}
      />
      <Text style={styles.eachPageBody}>
        Info: _____________________________
      </Text>
      <Text style={styles.eachPageBody}>
        Details: __________________________
      </Text>
      <Text style={styles.eachPageBody}>
        Status: ___________________________
      </Text>
    </View>
  );
}

function ToDoList() {
  return (
    <View style={styles.eachPage}>
      <Text style={styles.profileTitle}>To-Do List</Text>
      <Image
        style={styles.eachPageImage}
        source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8qCGL1zirnB7ijWRf41KLIg1BvtvZA3Jbg&usqp=CAU',
        }}
      />
      <Text style={styles.eachPageBody}>
        Info: _____________________________
      </Text>
      <Text style={styles.eachPageBody}>
        Details: __________________________
      </Text>
      <Text style={styles.eachPageBody}>
        Status: ___________________________
      </Text>
    </View>
  );
}

function ShoppingList() {
  return (
    <View style={styles.eachPage}>
      <Text style={styles.profileTitle}>Shopping List</Text>
      <Image
        style={styles.eachPageImage}
        source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-b9AyArONFLsNfS5cBb0tkdhb86Blh2R8QQ&usqp=CAU',
        }}
      />
      <Text style={styles.eachPageBody}>
        Info: _____________________________
      </Text>
      <Text style={styles.eachPageBody}>
        Details: __________________________
      </Text>
      <Text style={styles.eachPageBody}>
        Status: ___________________________
      </Text>
    </View>
  );
}

function Camera() {
  return (
    <View style={styles.eachPage}>
      <Text style={styles.profileTitle}>Camera</Text>
      <Image
        style={styles.eachPageImage}
        source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJdiUP_R3aGEHk4wmufEvv3CVvdAwVPaa0g&usqp=CAU',
        }}
      />
      <Text style={styles.eachPageBody}>
        Info: _____________________________
      </Text>
      <Text style={styles.eachPageBody}>
        Details: __________________________
      </Text>
      <Text style={styles.eachPageBody}>
        Status: ___________________________
      </Text>
    </View>
  );
}

function Map() {
  return (
    <View style={styles.eachPage}>
      <Text style={styles.profileTitle}>Map</Text>
      <Image
        style={styles.eachPageImage}
        source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvzRzbaE-PmD6XZOBkqkb9r4HowFPMm0asyw&usqp=CAU',
        }}
      />
      <Text style={styles.eachPageBody}>
        Info: _____________________________
      </Text>
      <Text style={styles.eachPageBody}>
        Details: __________________________
      </Text>
      <Text style={styles.eachPageBody}>
        Status: ___________________________
      </Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={styles.eachPage}>
      <Text style={styles.profileTitle}>Settings</Text>
      <Image
        style={styles.eachPageImage}
        source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQscw-vxqRvDkZlcqP9Zm1CsU2TnRmRgMjJOQ&usqp=CAU',
        }}
      />
      <Text style={styles.eachPageBody}>
        Info: _____________________________
      </Text>
      <Text style={styles.eachPageBody}>
        Details: __________________________
      </Text>
      <Text style={styles.eachPageBody}>
        Status: ___________________________
      </Text>
    </View>
  );
}

function About() {
  return (
    <View style={styles.eachPage}>
      <Text style={styles.profileTitle}>About</Text>
      <Image
        style={styles.eachPageImage}
        source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN90oJA76YaczpNB3p3129hEcKZVu2hVKIgQ&usqp=CAU',
        }}
      />
      <Text style={styles.eachPageBody}>
        Info: _____________________________
      </Text>
      <Text style={styles.eachPageBody}>
        Details: __________________________
      </Text>
      <Text style={styles.eachPageBody}>
        Status: ___________________________
      </Text>
    </View>
  );
}

function Contact() {
  return (
    <View style={styles.eachPage}>
      <Text style={styles.profileTitle}>Contact</Text>
      <Image
        style={styles.eachPageImage}
        source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvm5D0zmQHONOtCmjY2SC1ozLknQ-J8itf8w&usqp=CAU',
        }}
      />
      <Text style={styles.eachPageBody}>
        Info: _____________________________
      </Text>
      <Text style={styles.eachPageBody}>
        Details: __________________________
      </Text>
      <Text style={styles.eachPageBody}>
        Status: ___________________________
      </Text>
    </View>
  );
}

function Help() {
  return (
    <View style={styles.eachPage}>
      <Text style={styles.profileTitle}>Help</Text>
      <Image
        style={styles.eachPageImage}
        source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-D5AgGnknI9_EHPBHZfrVthByxGuMKwF2sA&usqp=CAU',
        }}
      />
      <Text style={styles.eachPageBody}>
        Info: _____________________________
      </Text>
      <Text style={styles.eachPageBody}>
        Details: __________________________
      </Text>
      <Text style={styles.eachPageBody}>
        Status: ___________________________
      </Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Image
        style={styles.hamburgerMenuImage}
        source={{
          uri:
            'https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/cat-icon.png',
        }}
      />
      <DrawerItemList {...props} />
      {/* 
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.toggleDrawer()}
      />
      <DrawerItem
        label="Profile"
        onPress={() => props.navigation.toggleDrawer()}
      />*/}
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Feed} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Health" component={Health} />
      <Drawer.Screen name="To-Do List" component={ToDoList} />
      <Drawer.Screen name="Shopping List" component={ShoppingList} />
      <Drawer.Screen name="Camera" component={Camera} />
      <Drawer.Screen name="Map" component={Map} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  hamburgerMenuImage: {
    width: 75,
    height: 75,
    borderRadius: 25,
    marginLeft: 10,
  },
  eachPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileTitle: {
    backgroundColor: 'whitesmoke',
    color: '#4A90E2',
    fontSize: 24,
    padding: 10,
  },
  eachPageImage: {
    width: 100,
    height: 100,
    borderRadius: 25,
    margin: 10,
  },
  homePageImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 20,
  },
  eachPageBody: {
    color: 'grey',
    fontSize: 12,
    padding: 5,
  },
  textHomePage: {
    fontSize: 30,
    color: '#4A90E2',
    padding: 10,
  },
});