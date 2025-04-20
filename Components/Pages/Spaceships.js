import React from "react";
import { View } from "react-native";
import styles from "./styles";
import ListContainer from "../Lists/ListContainer";
import SearchBar from "../SearchBar";

export default function Spaceships() {
  return (
    <View style={styles.container}>
      <SearchBar/>
      <ListContainer 
        listName="starships" 
        results="results"
        field="name"/>
    </View>
  );
}