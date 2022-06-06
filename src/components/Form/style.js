import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "#04D361",
    padding: 50,
    alignItems: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  formContent: {
    alignItems: "center",
  },
  textForm: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    alignItems: "center",
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  inputForm: {
    backgroundColor: "rgba(2, 163, 74, 0.3)",
    padding: 10,
    borderRadius: 35,
    width: 250,
    height: "auto",
  },
  buttonForm: {
    width: 350,
    height: "auto",
    alignItems: "center",
    padding: 10,
    borderRadius: 35,
    marginTop: 20,
    opacity: 10,
    backgroundColor: "rgb(2, 163, 74)",
  },
  textButtonForm: {
    color: "white",
    fontSize: 20,
  },
  marginTopText: {
    marginTop: 20,
  },
  errorMessage: {
    fontSize: 10,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  exhibitionResultImc: {
    width: "100%",
    height: "50%",
  },
});

export default styles;
