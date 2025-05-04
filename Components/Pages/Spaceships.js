import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import styles from "./styles";
import ListContainer from "../Lists/ListContainer";
import SearchBar from "../SearchBar";

export default function Spaceships() {
  const [searchText, setSearchText] = useState("");

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <ListContainer 
        listName="starships" 
        results="results"
        field="name"
        searchText={searchText}
      />
    </KeyboardAvoidingView>
  );
}