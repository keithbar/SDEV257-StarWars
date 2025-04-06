import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import ListContainer from "../Lists/ListContainer";

export default function Films() {
  return (
    <View style={styles.container}>
      <ListContainer 
        listName="films"
        results="result"
        field="title"/>
    </View>
  );
}