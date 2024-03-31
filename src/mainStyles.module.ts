import { StyleSheet } from "react-native";

export const mainStyles = StyleSheet.create({
  center: {
    height: "100%",
    width: "100%",
  },
  darkContainer: {
    backgroundColor: "#25272b",
  },
  lightContainer: {
    backgroundColor: "#fffefe",
  },
  containerAll: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "90%",
    margin: "5%",
  },
  card: {
    width: "100%",
    padding: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "gray",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: true ? "#fffefe" : "#25272b",
  },
  textDark: {
    color: "#fffefe"
  },
  textLight: {
    color: "#25272b"
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
  },
  paragraph: {
    fontSize: 14,
  },
  inputText: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginVertical: 10,
    /* TODO: renderizado condicional depende del modo de color */
    backgroundColor: "lightgray",
    borderRadius: 5,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "blue",
    borderRadius: 10,
    marginVertical: 10,
  },
  largeButton: {
    width: "100%",
  },
  buttonText: {
    color: "#fffefe",
  },
});
