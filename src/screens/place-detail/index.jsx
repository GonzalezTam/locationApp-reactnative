import { View, Text, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";

import MapPreview from "../../components/map-preview";
import { styles } from "./styles";

const PlaceDetail = ({ navigation, route }) => {
  const { placeId } = route.params;

  const place = useSelector((state) => state.place.places.find((place) => place.id === placeId));
  // eslint-disable-next-line no-unused-vars
  const { title, image, address, coords } = place || {};
  const location = JSON.parse(coords) || {};
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{place.title}</Text>
      </View>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <View style={styles.imgContainer}>
          <Text>Imagen no disponible</Text>
        </View>
      )}
      <View style={styles.location}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{address}</Text>
        </View>
        <MapPreview style={styles.map} location={{ lat: location?.lat, lng: location?.lng }}>
          <Text>Ubicacion no disponible</Text>
        </MapPreview>
      </View>
    </ScrollView>
  );
};

export default PlaceDetail;
