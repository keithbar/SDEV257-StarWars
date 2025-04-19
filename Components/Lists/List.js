import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Alert, ScrollView, View } from "react-native";
import ListItem from "./ListItem";
import styles from "../Pages/styles";

export default function List({ data }) {

  function onSwipe(name){
    return () => {
      Alert.alert(name);
    };
  }
  
  return(
    <ScrollView style={styles.itemList}>
      {data.map((v, i) => (
        <View key={i}>
          <ListItem name={v.value} onSwipe={onSwipe(v.value)} id={i}/>
        </View>
      ))}
    </ScrollView>
  );
}

List.propTypes = {
  data: PropTypes.array.isRequired,
};