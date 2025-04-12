import React from "react";
import { View, KeyboardAvoidingView, Text, Platform } from "react-native";
import styles from "./styles";
import ListContainer from "../Lists/ListContainer";
import SearchBar from "../SearchBar";

export default function Planets() {
  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SearchBar/>
      <ListContainer
        listName="planets"
        results="results"
        field="name"/>
    </KeyboardAvoidingView>
  );
}