import React, { useState } from "react";
import { TextInput, Alert, View, 
    TouchableOpacity, Keyboard } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./Pages/styles";

export default function SearchBar(){
    const [changedText, setChangedText] = useState("");
    const [submittedText, setSubmittedText] = useState("");

    function handleSubmittedText(text){
        Keyboard.dismiss();
        setSubmittedText(text);
        Alert.alert(
            "You searched for " + text + ".",
            "Search results will be implemented in a future update."
        );
        setChangedText("");
        setSubmittedText("");
    }

    return(
        <View style={styles.textInputContainer}>
            <TextInput
                style={styles.textInput}
                label="Search"
                returnKeyType="search"
                placeholder="Search"
                value={changedText}
                onChangeText={(e) => {
                    setChangedText(e);
                }}
                onSubmitEditing={(e) => {
                    handleSubmittedText(e.nativeEvent.text);
                }}
                onFocus={() => {
                    setChangedText("");
                    setSubmittedText("");
                }}
            />
            <TouchableOpacity 
                style={styles.searchButton}
                onPress={() => handleSubmittedText(changedText)}
            >
                <FontAwesome
                    name="search"
                    size={15}
                />
            </TouchableOpacity>
        </View>
    );
}