import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F1F2",
  },
  formContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
    minWidth: 300,
  },
  title: {
    fontFamily: "Inter-Bold",
    fontSize: 17,
    marginBottom: 10,
  },
  inputGroup: {
    gap: 10,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#F6F6F8",
    padding: 10,
  },
});
