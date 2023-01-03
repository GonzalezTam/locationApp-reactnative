import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    margin: 10,
  },
  input: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  button: {
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
  },
});
