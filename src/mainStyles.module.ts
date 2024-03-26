import { StyleSheet } from "react-native";

const mainStyles = StyleSheet.create({
  center: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  containerAll: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "90%",
    margin: "5%",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 14,
  },
  inputText: {
    width: 300,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginVertical: 10,
    backgroundColor: "lightgray",
    borderRadius: 5,
  },
});

export { mainStyles };
