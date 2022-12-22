import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  TextInput,
} from "react-native";

const AddToMyPlantsModal = ({
  username,
  plant_id,
  singlePlantData,
  togglePressed,
  cancelButton,
}) => {
  console.log(singlePlantData);
  const [lastWatered, setLastWatered] = useState("");
  const [nickname, setNickname] = useState("");
  const reqBody = { username, plant_id };

  return (
    <View style={styles.modalView}>
      <View style={styles.plantImage}>
        <Image
          style={{ width: 200, height: 200, borderRadius: 20 }}
          source={{ uri: singlePlantData?.picture_url }}
        />
      </View>

      <View style={styles.plantInfo}>
        <Text style={styles.commonName}>{singlePlantData?.common_name}</Text>
        <Text style={styles.latinName}>{singlePlantData?.latin_name}</Text>
      </View>
      <View style={styles}>
        <TextInput
          style={styles.textInput}
          placeholder="How many days ago was this plant 
      last watered?"
        />

        <TextInput style={styles.textInput} placeholder="Plant nickname" />
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.pressable} onPress={cancelButton}>
          <Text>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddToMyPlantsModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7F9B91",
  },

  modalView: {
    flex: 1,
    margin: 30,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  plantImage: {
    flex: 3,
    paddingHorizontal: 20,
    borderRadius: 20,
    flex: 1,
    borderWidth: 1,
  },
  plantInfo: { flex: 1, borderWidth: 1 },
  commonName: {
    fontWeight: "bold",
    fontSize: 30,
  },
  latinName: {
    fontSize: 20,
    flex: 1,
    fontStyle: "italic",
  },

  buttonsContainer: {
    borderWidth: 1,
    flexDirection: "row",
  },
  pressable: {
    backgroundColor: "#7F9B91",
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
  },
  textInput: {
    height: 30,
    backgroundColor: "grey",

    borderColor: "red",
    borderWidth: 3,
  },
});
