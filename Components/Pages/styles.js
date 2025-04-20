import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 10,
  },

  itemList: {
    flex: 1,
    alignSelf: "center",
  },

  itemContainer: {
    flex: 1,
    flexDirection: "row",
    width: 200
  },

  item: {
    margin: 5,
    padding: 25,
    width: 200,
    backgroundColor: "ghostwhite",
    justifyContent: "center",
    alignItems: "center"
  },

  itemText: {
    textAlign: "center",
    color: "slategrey"
  },

  swipeBlank: {
    width: 200,
  },

  textInputContainer: {
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

  headerImage: {
    flex: 1,
    backgroundColor: "black",
    width: "100%"
  }
});