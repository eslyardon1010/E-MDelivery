import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { Context as AuthContext } from "../../providers/AuthContext";

function Home() {
  return (
    <View>
      <Text>Welcome this is Search Results</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default Home;