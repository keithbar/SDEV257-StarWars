import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Alert, ScrollView, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import ListItem from "./ListItem";
import styles from "../Pages/styles";

export default function List({ data }) {
  const navigation = useNavigation();
  const route = useRoute();

  function onSwipe(name, uid){
    return () => {
      if(route.name == "Planets"){
        navigation.navigate("Details", { name: name, uid: uid });
      }
    };
  }
  
  return(
    <ScrollView style={styles.itemList}>
      {data.map((v, i) => (
        <View key={i}>
          <ListItem name={v.value} onSwipe={onSwipe(v.value, v.key)} id={i}/>
        </View>
      ))}
    </ScrollView>
  );
}

List.propTypes = {
  data: PropTypes.array.isRequired,
};