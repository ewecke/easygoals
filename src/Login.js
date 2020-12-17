import React from "react";
import { View, Button } from "react-native";

const LogIn = () => {
  return (
    <View>
      <Button title="Register" onPress={() => alert("Please register")} />
      <Button
        title="Log in"
        onPress={() => alert("Registered users please log in")}
      />
    </View>
  );
};

export default LogIn;