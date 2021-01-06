import React from 'react';
import Screen from './Screen';

export const ProfileScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Profile" />
);
export const ToDoScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="ToDo List" />
);
export const ShoppingListScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Shopping List" />
);
export const HealthScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Health" />
);
export const GoalScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Goals" />
);
export const ContactScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Contact" />
);
export const SignOutScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="SignOut" />
);
