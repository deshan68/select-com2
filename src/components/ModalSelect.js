import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Modal } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Pressable } from "react-native";
export default function ModalSelect({
  modalVisible,
  setModalVisible,
  selectedOption,
  setSelectedOption,
  DATA,
}) {
  const OptionList = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedOption(item)}
        style={[
          styles.OptionItem,
          {
            backgroundColor:
              selectedOption.id === item.id ? "#F5F8F9" : "transparent",
          },
        ]}
      >
        <View style={{ width: 20 }}>
          {selectedOption.id === item.id && (
            <Icon name="check" size={20} style={{ color: "black" }} />
          )}
        </View>
        <Text
          style={{
            fontSize: 20,
            color: selectedOption.id === item.id ? "black" : "gray",
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modelHeader}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Icon name="close" size={20} />
            </Pressable>
            <Text style={styles.modalText}>Preferred Pronouns</Text>
            <Text style={{ width: "5%" }}> </Text>
          </View>
          <FlatList
            style={styles.optionListContaner}
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={OptionList}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  //---------------------modal
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 0,
    paddingTop: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modelHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    borderRadius: 20,
    paddingHorizontal: 10,
    // elevation: 2,
    width: "10%",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    width: "80%",
  },
  optionListContaner: {
    width: "100%",
    marginTop: 20,
    paddingBottom: 30,
  },
  OptionItem: {
    borderBottomColor: "#B4B5B6",
    borderBottomWidth: 0.35,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 15,
    paddingLeft: 5,
  },
});
