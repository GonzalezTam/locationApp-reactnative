import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: colors.text,
  },
  imgContainer: {
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  image: {
    height: "40%",
    minHeight: 300,
    width: "100%",
  },
  location: {
    margin: 20,
    width: "90%",
    maxWidth: 350,
    borderRadius: 10,
    marginTop: -30,
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: colors.primary,
    textAlign: "center",
  },
});
