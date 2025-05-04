import React, { useState, useCallback } from "react";
import { TextInput, Alert, View, 
    TouchableOpacity, Keyboard } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./Pages/styles";

export default function SearchBar({ searchText, setSearchText }){
    function handleSubmittedText(text){
        Keyboard.dismiss();
        setSearchText(text);
    }

    useFocusEffect(
        useCallback(() => {
            setSearchText("");
        }, [])
    );

    return(
        <View style={styles.textInputContainer}>
            <TextInput
                style={styles.textInput}
                label="Search"
                returnKeyType="search"
                placeholder="Search"
                value={searchText}
                onChangeText={setSearchText}
                onSubmitEditing={(e) => {
                    handleSubmittedText(e.nativeEvent.text);
                }}
                onFocus={() => {
                    setSearchText("");
                }}
            />
            <TouchableOpacity 
                style={styles.searchButton}
                onPress={() => handleSubmittedText(searchText)}
            >
                <FontAwesome
                    name="search"
                    size={15}
                />
            </TouchableOpacity>
        </View>
    );
}