import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";

import { ImageSelector } from "../../components";
import { addPlace } from "../../store/place.slice";
import colors from "../../utils/colors";
import { styles } from "./styles";

const NewPlace = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [coords, setCoords] = useState(null);
  const dispatch = useDispatch();
  const onHandleSave = () => {
    dispatch(addPlace({ title, image, coords }));
    navigation.navigate("Places");
  };
  const onHandleChange = (value) => {
    setTitle(value);
  };
  const onImagePicker = (uri) => {
    setImage(uri);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>New Place</Text>
        <TextInput onChangeText={onHandleChange} style={styles.input} />
        <ImageSelector onImagePicker={onImagePicker} />
        <View style={styles.button}>
          <Button title="Guardar" color={colors.backgroundDark} onPress={onHandleSave} />
        </View>
      </View>
    </ScrollView>
  );
};

export default NewPlace;
