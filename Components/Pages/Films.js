import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import ListContainer from "../Lists/ListContainer";
import SearchBar from "../SearchBar";

export default function Films() {
  return (
    <View style={styles.container}>
      <SearchBar/>
      <ListContainer 
        listName="films"
        results="result"
        field="title"/>
    </View>
  );
}