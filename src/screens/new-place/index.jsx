import React, { useState } from "react";
import { View, ScrollView, TextInput, Button, Alert } from "react-native";
import { useDispatch } from "react-redux";

import { ImageSelector, LocationSelector } from "../../components";
import { addPlace } from "../../store/place.slice";
import colors from "../../utils/colors";
import { styles } from "./styles";

const NewPlace = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [coords, setCoords] = useState(null);
  const dispatch = useDispatch();
  const onHandleSave = () => {
    if (!title) {
      Alert.alert("Error", "Debe ingresar un nombre", [{ text: "Ok" }]);
      return;
    }
    dispatch(addPlace({ title, image, coords }));
    navigation.navigate("Places");
  };
  const onHandleChange = (value) => {
    setTitle(value);
  };
  const onImagePicker = (uri) => {
    setImage(uri);
  };
  const onLocationPicker = (location) => {
    console.warn(location);
    setCoords(location);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <TextInput
          onChangeText={onHandleChange}
          placeholder="Nombre del lugar"
          style={styles.input}
        />
        <ImageSelector onImagePicker={onImagePicker} />
        <LocationSelector onLocationPicker={onLocationPicker} />
        <View style={styles.button}>
          <Button title="Guardar" color={colors.backgroundDark} onPress={onHandleSave} />
        </View>
      </View>
    </ScrollView>
  );
};

export default NewPlace;
