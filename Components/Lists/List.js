import React from "react";
import PropTypes from "prop-types";
import { Text, FlatList } from "react-native";
import styles from "../Pages/styles";

export default function List({ data }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text
        style={styles.item}>{item.value}</Text>}
    />
  );
}

List.propTypes = {
  data: PropTypes.array.isRequired,
};