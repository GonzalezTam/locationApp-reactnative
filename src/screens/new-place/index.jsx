import { View, Text, ScrollView, TextInput, Button } from "react-native";

import colors from "../../utils/colors";
import { styles } from "./styles";

const NewPlace = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>New Place</Text>
        <TextInput style={styles.input} />
        <View style={styles.button}>
          <Button
            title="Guardar"
            color={colors.backgroundDark}
            onPress={() => navigation.navigate("Place")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default NewPlace;
