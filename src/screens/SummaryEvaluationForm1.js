import {
  Dimensions,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import ModalSelect from "../components/ModalSelect";
import { optionObjectArry } from "../../optionObjects";
import Calendar from "react-native-calendars/src/calendar";
import ModalScreenV2 from "../components/ModalScreenV2";
import RadioOptions from "../components/RadioOptions";
import SummaryformButton from "../components/SummaryformButton";

export default function SummaryEvaluationForm1({ navigation }) {
  const [modalVisiblepreferredSelect, setModalVisiblepreferredSelect] =
    useState(false);
  const [selectedOptionpreferredSelect, setSelectedOptionpreferredSelect] =
    useState([]);
  const [modalVisibleGender, setModalVisibleGender] = useState(false);
  const [selectedOptionGender, setSelectedOptionGender] = useState([]);
  const [modalVisibleMaritalStatus, setModalVisibleMaritalStatus] =
    useState(false);
  const [selectedOptionMaritalStatus, setSelectedOptionMaritalStatus] =
    useState([]);
  const [selectedOptionEthnicity, setSelectedOptionEthinicity] = useState([]);
  const [selectedOptionOrganDonor, setSelectedOptionOrganDonor] = useState([]);
  const [modalVisibleCalander, setModalVisibleCalander] = useState(false);
  const [selectedDOB, setSelectedDOB] = useState("");
  const prgressBarValue = 1;

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 35 : 0,
      }}
    >
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 16,
          paddingVertical: 10,
          backgroundColor: "#F5F8F9",
        }}
      >
        <Icon
          name="close"
          size={20}
          style={{ padding: 4 }}
          onPress={() => {
            navigation.navigate("UniqueWristband");
          }}
        />
        <Text style={{ fontSize: 16, fontWeight: "500" }}>
          Summary Evaluation Form
        </Text>
        <Icon
          name="close"
          size={20}
          style={{ color: "transparent", padding: 4 }}
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.progressTextIndicator}>{prgressBarValue}/3</Text>
          <View style={styles.progressbrContainer}>
            <View
              style={[
                styles.completeBar,
                {
                  width: ((100 / 3) * prgressBarValue).toString().concat("%"),
                  maxWidth: "100%",
                },
              ]}
            ></View>
          </View>
          <Text style={styles.title}>Basic information</Text>
          <Text style={styles.subTitle}>Next: Physical information</Text>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.inputLeft} placeholder="arun" />
            <TextInput style={styles.inputRight} placeholder="arun" />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.inputLeft} placeholder="arun" />
            <TextInput style={styles.inputRight} placeholder="arun" />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.inputFull} placeholder="arun" />
          </View>
          <View style={{ width: "100%", marginTop: 15 }}>
            <ModalScreenV2
              modalVisible={modalVisiblepreferredSelect}
              setModalVisible={setModalVisiblepreferredSelect}
              selectedOption={selectedOptionpreferredSelect}
              setSelectedOption={setSelectedOptionpreferredSelect}
              DATA={optionObjectArry[0].preferredPronounsList}
              text="Preferred pronouns"
              boderRad={12}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: "48%", marginTop: 15 }}>
              <ModalScreenV2
                modalVisible={modalVisibleGender}
                setModalVisible={setModalVisibleGender}
                selectedOption={selectedOptionGender}
                setSelectedOption={setSelectedOptionGender}
                DATA={optionObjectArry[1].gender}
                text="Gender"
                boderRad={12}
              />
            </View>
            <View style={{ width: "48%" }}>
              <TouchableOpacity
                onPress={() => setModalVisibleCalander(true)}
                style={[styles.preferredSelect]}
              >
                <Text>{selectedDOB || "Date of birth"}</Text>
                <Icon name="calendar" />
              </TouchableOpacity>
            </View>
            {/* -------------------------------------------------------------------------------- calnder modal */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisibleCalander}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={styles.modelHeader}>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisibleCalander(false)}
                    >
                      <Icon name="close" size={20} />
                    </Pressable>
                    <Text style={styles.modalText}>Calender</Text>
                    <Text style={{ width: "5%" }}> </Text>
                  </View>
                  <View style={styles.optionListContaner}>
                    <Calendar
                      onDayPress={(day) => {
                        setSelectedDOB(day.dateString);
                        setModalVisibleCalander(false);
                      }}
                      hideExtraDays={true}
                      enableSwipeMonths={true}
                    />
                  </View>
                </View>
              </View>
            </Modal>
          </View>
          <View style={{ width: "100%", marginTop: 15 }}>
            <ModalScreenV2
              modalVisible={modalVisibleMaritalStatus}
              setModalVisible={setModalVisibleMaritalStatus}
              selectedOption={selectedOptionMaritalStatus}
              setSelectedOption={setSelectedOptionMaritalStatus}
              DATA={optionObjectArry[2].maritalStatus}
              text="Marital status"
              boderRad={12}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.inputFull} placeholder="Home phone" />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.inputFull} placeholder="Address" />
          </View>
          <View style={{ width: "100%", marginTop: 15 }}>
            <RadioOptions
              title={"Ethnicity"}
              color={"#00B0F0"}
              DATA={optionObjectArry[3].ethnicityOptions}
              setSelectedOption={setSelectedOptionEthinicity}
              layout="column"
              selectedOption={selectedOptionEthnicity}
            />
          </View>
          <View style={{ width: "100%", marginTop: 15 }}>
            <RadioOptions
              title={"Organ donor"}
              color={"#00B0F0"}
              DATA={optionObjectArry[4].organDonor}
              setSelectedOption={setSelectedOptionOrganDonor}
              layout="row"
              selectedOption={selectedOptionOrganDonor}
            />
          </View>
          <View style={{ width: "100%" }}>
            <SummaryformButton
              title={"Next, Physical information"}
              navigation={navigation}
              navTo={"SummaryEvaluationForm2"}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    alignItems: "flex-start",
    paddingHorizontal: 16,
    backgroundColor: "#F5F8F9",
  },
  progressTextIndicator: {
    width: "100%",
    textAlign: "right",
    marginTop: 3,
    fontWeight: "500",
    fontSize: 14,
    color: "#747E80",
  },
  progressbrContainer: {
    width: "100%",
    height: 5,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: "#DEE0E0",
  },
  completeBar: {
    backgroundColor: "#20AD8D",
    height: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: "#18282C",
  },
  subTitle: { fontSize: 14, fontWeight: "400", color: "#747E80" },
  inputLeft: {
    width: "20%",
    height: 48,
    borderWidth: 1,
    padding: 10,
    borderColor: "#EAECED",
    borderRadius: 10,
    backgroundColor: "#ffff",
  },
  inputRight: {
    width: "75%",
    height: 48,
    borderWidth: 1,
    padding: 10,
    borderColor: "#EAECED",
    backgroundColor: "#ffff",
    borderRadius: 10,
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    width: "100%",
    marginTop: 10,
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
  preferredSelect: {
    marginTop: 15,
    backgroundColor: "#ffff",
    borderColor: "#EAECED",
    borderWidth: 1,
    borderRadius: 12,
    height: 48,
    paddingHorizontal: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  // --------------------calnder modal
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
});
