import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import ListContainer from "../Lists/ListContainer";

export default function Spaceships() {
  return (
    <View style={styles.container}>
      <ListContainer 
        listName="starships" 
        results="results"
        field="name"/>
    </View>
  );
}