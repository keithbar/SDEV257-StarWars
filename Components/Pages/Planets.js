import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import ListContainer from "../Lists/ListContainer";

export default function Planets() {
  return (
    <View style={styles.container}>
      <ListContainer
        listName="planets"
        results="results"
        field="name"/>
    </View>
  );
}