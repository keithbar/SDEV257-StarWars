import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 10,
  },

  item: {
    margin: 5,
    padding: 5,
    color: "slategrey",
    backgroundColor: "ghostwhite",
    textAlign: "center"
  },

  textInputContainer: {
    alignSelf: "stretch",
    marginBottom: 10,
    marginTop: 10,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    borderColor: "#C0C0C0",
    borderRadius: 60,
    backgroundColor: "white",
    borderWidth: 1,
  },

  textInput: {
    paddingHorizontal: 20,
    flex: 1,
  },

  searchButton: {
    backgroundColor: "slategrey",
    borderRadius: 60,
    height: 35,
    width: 35,
    marginHorizontal: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },
});