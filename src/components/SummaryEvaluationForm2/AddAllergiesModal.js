import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import ModalScreenV2 from "../ModalScreenV2";
import { optionObjectArry } from "../../../optionObjects";
import SummaryformButton from "../SummaryformButton";

export default function AddAllergiesModal({
  modalVisibleAddAllergies,
  setModalVisibleAddAllergies,
  navigation,
}) {
  const [modalVisibleMaritalStatus, setModalVisibleMaritalStatus] =
    useState(false);
  const [selectedOptionMaritalStatus, setSelectedOptionMaritalStatus] =
    useState([]);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisibleAddAllergies}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modelHeader}>
            <Icon
              style={{}}
              name="close"
              size={20}
              onPress={() => setModalVisibleAddAllergies(false)}
            />

            <Text style={styles.modalText}>Add ALLERGIES</Text>
            <Icon style={{}} name="close" size={20} color="transparent" />
          </View>
          <View style={styles.optionListContaner}>
            <ModalScreenV2
              modalVisible={modalVisibleMaritalStatus}
              setModalVisible={setModalVisibleMaritalStatus}
              selectedOption={selectedOptionMaritalStatus}
              setSelectedOption={setSelectedOptionMaritalStatus}
              DATA={optionObjectArry[2].maritalStatus}
              text="Allergie type"
              boderRad={12}
            />
            <TextInput
              style={styles.inputFull}
              placeholder="Allergic to"
              placeholderTextColor={"#747E80"}
            />

            <ModalScreenV2
              modalVisible={modalVisibleMaritalStatus}
              setModalVisible={setModalVisibleMaritalStatus}
              selectedOption={selectedOptionMaritalStatus}
              setSelectedOption={setSelectedOptionMaritalStatus}
              DATA={optionObjectArry[2].maritalStatus}
              text="Symptom"
              boderRad={12}
            />
            <ModalScreenV2
              modalVisible={modalVisibleMaritalStatus}
              setModalVisible={setModalVisibleMaritalStatus}
              selectedOption={selectedOptionMaritalStatus}
              setSelectedOption={setSelectedOptionMaritalStatus}
              DATA={optionObjectArry[2].maritalStatus}
              text="Reaction type"
              boderRad={12}
            />
            <TextInput
              numberOfLines={10}
              multiline={true}
              style={[styles.inputFull, { height: 110 }]}
              placeholder="Notes Will be here (Optional)"
            />
          </View>
          <TouchableOpacity
            onPress={() => setModalVisibleAddAllergies(false)}
            style={styles.button}
          >
            <Text style={styles.buttnText}>Add Allergie</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  // --------------------calnder modal
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#F3F5F7",
    borderRadius: 10,
    paddingHorizontal: 20,
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
    width: "100%",
  },
  modalText: {
    fontSize: 24,
    fontWeight: "600",
  },
  optionListContaner: {
    width: "100%",
    marginTop: 20,
    paddingBottom: 30,
    gap: 15,
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputFull: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: "#EAECED",
    padding: 10,
    backgroundColor: "#ffff",
    borderRadius: 10,
  },
  //   ----------------------------add a;;ergie bttn
  button: {
    width: "100%",
    height: 52,
    backgroundColor: "#00B0F0",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  buttnText: {
    color: "#ffff",
    fontWeight: "700",
    fontSize: 16,
  },
});
