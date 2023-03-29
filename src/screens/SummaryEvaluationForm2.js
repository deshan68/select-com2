import {
  Dimensions,
  KeyboardAvoidingView,
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
import AddAllergiesModal from "../components/SummaryEvaluationForm2/AddAllergiesModal";
import SubstanceScreenModal from "../components/SummaryEvaluationForm2/SubstanceScreenModal";

export default function SummaryEvaluationForm2({ navigation }) {
  const [modalVisibleWeight, setModalVisibleWeight] = useState(false);
  const [selectedOptionWeight, setSelectedOptionWeight] = useState([]);
  const [modalVisibleHeight, setModalVisibleHeight] = useState(false);
  const [selectedOptionHeight, setSelectedOptionHeight] = useState([]);
  const [modalVisibleAddAllergies, setModalVisibleAddAllergies] =
    useState(false);
  // const [selectedOptionMaritalStatus, setSelectedOptionMaritalStatus] =
  //   useState([]);
  const [selectedOptionEthnicity, setSelectedOptionEthinicity] = useState([]);
  const [
    selectedOptionTobacco_nicotines_use,
    setSelectedOptionTobacco_nicotines_use,
  ] = useState([]);
  const [
    modalVisibleTobacco_nicotines_use,
    setModalVisibleTobacco_nicotines_use,
  ] = useState(false);
  const [
    modalVisibleBloodProductInEmergency,
    setModalVisibleBloodProductInEmergency,
  ] = useState(false);
  const prgressBarValue = 2;
  const [allergieList, setallergieList] = useState([
    {
      id: 1,
      name: "Asprin (Drug)",
      Symptom: " Shortness Of Breath",
      reaction: "Severe",
    },
    {
      id: 2,
      name: "Asprin",
      Symptom: " Shortness Breath",
      reaction: "Severe",
    },
    {
      id: 3,
      name: "Drug",
      Symptom: " Shortness",
      reaction: "Severe",
    },
  ]);

  const [tobaco_nicotine_use, setTobaco_nicotine_use] = useState([
    {
      id: 1,
      name: "Cigarattes",
      selected: true,
    },
    {
      id: 2,
      name: "Electronic cigarettes",
      selected: true,
    },
    {
      id: 3,
      name: "Pipe",
      selected: false,
    },
    {
      id: 4,
      name: "Hookah",
      selected: false,
    },
    {
      id: 5,
      name: "Chewing tobacco",
      selected: false,
    },
    {
      id: 6,
      name: "Snuf",
      selected: false,
    },
  ]);

  const [bloodProductInEmergency, setBloodProductInEmergency] = useState(
    optionObjectArry[8].blood_product_in_emergency
  );
  const [
    selectedOptionBloodProductInEmergency,
    setSelectedOptionBloodProductInEmergency,
  ] = useState([]);

  const AddAllergieHandler = () => {
    setallergieList([
      ...allergieList,
      {
        id: 4,
        name: "Drug",
        Symptom: " Shortness",
        reaction: "Severe",
      },
    ]);
    console.log("add allergies");
  };
  const [isMulpleChoice, setMultipleChoice] = useState(false);
  useEffect(() => {
    for (let i = 0; i < tobaco_nicotine_use.length; i++) {
      if (!tobaco_nicotine_use[i].selected) {
        setMultipleChoice(false);
      } else {
        setMultipleChoice(true);
        break;
      }
    }
  }, [tobaco_nicotine_use]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
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
            <Text style={styles.progressTextIndicator}>
              {prgressBarValue}/3
            </Text>
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
            <Text style={styles.title}>Physical information</Text>
            <Text style={styles.subTitle}>Next: Medical Activities</Text>
            {/* ---------------------------------BMI calculator-------------------------------------- */}

            <View style={styles.bmiCalculatorConatainer}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#404040",
                }}
              >
                BMI Calculator
              </Text>
              <View style={styles.bmiContent}>
                <View style={styles.bmiContentRow}>
                  <View style={styles.KGsSelectorRow}>
                    <ModalScreenV2
                      modalVisible={modalVisibleWeight}
                      setModalVisible={setModalVisibleWeight}
                      selectedOption={selectedOptionWeight}
                      setSelectedOption={setSelectedOptionWeight}
                      DATA={optionObjectArry[5].weights}
                      text="KGs"
                    />
                  </View>
                  <View style={styles.WeightInputRow}>
                    <TextInput
                      style={styles.inputWeight}
                      placeholder="Weight (Lbs/KGs"
                    />
                  </View>
                </View>
                <View style={styles.bmiContentRow}>
                  <View style={styles.KGsSelectorRow}>
                    <ModalScreenV2
                      modalVisible={modalVisibleHeight}
                      setModalVisible={setModalVisibleHeight}
                      selectedOption={selectedOptionHeight}
                      setSelectedOption={setSelectedOptionHeight}
                      DATA={optionObjectArry[6].heights}
                      text="CM"
                    />
                  </View>
                  <View style={styles.WeightInputRow}>
                    <TextInput
                      style={styles.inputWeight}
                      placeholder="Height (Feet/Inches/CM"
                    />
                  </View>
                </View>
                <Text style={{ color: "#404040", fontSize: 21 }}>
                  BMI:{" "}
                  <Text style={{ color: "#747E80" }}>
                    20.0 <Text style={{ color: "#20AD8D" }}>(Normal)</Text>
                  </Text>
                </Text>
              </View>
            </View>

            {/* ---------------------Add Allergies ------------------ */}
            <View style={styles.bmiCalculatorConatainer}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#404040",
                }}
              >
                Add Allergies
              </Text>
              <View style={styles.AddAllergiesContent}>
                {allergieList.map((allergie) => (
                  <View key={allergie.id} style={styles.allergieRow}>
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          color: "#000",
                          fontWeight: "500",
                          marginBottom: 3,
                        }}
                      >
                        {allergie.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 10,
                          marginBottom: 2,
                          color: "#747E80",
                          fontWeight: "400",
                        }}
                      >
                        Symptom: {allergie.Symptom}
                      </Text>
                      <Text
                        style={{
                          fontSize: 10,
                          color: "#747E80",
                          fontWeight: "400",
                        }}
                      >
                        Reaction: {allergie.reaction}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        setallergieList(
                          allergieList.filter((item) => item.id != allergie.id)
                        );
                      }}
                    >
                      <Text
                        style={{
                          color: "#EC4159",
                          fontWeight: "400",
                          fontSize: 10,
                        }}
                      >
                        Remove
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}

                <TouchableOpacity
                  onPress={() => setModalVisibleAddAllergies(true)}
                  style={{
                    color: "#404040",
                    fontSize: 21,
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                    paddingVertical: 4,
                  }}
                >
                  <Icon name="plus" color={"#00B0F0"} size={15} />
                  <Text style={{ color: "#00B0F0", fontSize: 14 }}>
                    Add Allergies
                  </Text>
                  <AddAllergiesModal
                    setModalVisibleAddAllergies={setModalVisibleAddAllergies}
                    modalVisibleAddAllergies={modalVisibleAddAllergies}
                    navigation={navigation}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* ------------------------------------------------other */}

            <View style={styles.bmiCalculatorConatainer}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#404040",
                }}
              >
                Others
              </Text>
              <View style={styles.OthersContent}>
                <View style={{ width: "100%", marginTop: 15 }}>
                  <RadioOptions
                    title={"Alcohol screen?"}
                    color={"#00B0F0"}
                    DATA={optionObjectArry[4].organDonor}
                    setSelectedOption={setSelectedOptionEthinicity}
                    layout="row"
                    selectedOption={selectedOptionEthnicity}
                  />
                </View>
                <View style={{ width: "100%", marginTop: 15 }}>
                  <RadioOptions
                    title={"Tobacco/Nicotine use"}
                    color={"#00B0F0"}
                    DATA={optionObjectArry[4].organDonor}
                    setSelectedOption={setSelectedOptionEthinicity}
                    layout="row"
                    selectedOption={selectedOptionEthnicity}
                  />
                </View>
                <View style={{ width: "100%", marginBottom: 0 }}>
                  <ModalScreenV2
                    modalVisible={modalVisibleTobacco_nicotines_use}
                    setModalVisible={setModalVisibleTobacco_nicotines_use}
                    selectedOption={selectedOptionTobacco_nicotines_use}
                    setSelectedOption={setSelectedOptionTobacco_nicotines_use}
                    DATA={tobaco_nicotine_use}
                    setDATA={setTobaco_nicotine_use}
                    text="Please Select"
                    boderRad={12}
                    multipleSelect={true}
                    subHead={"You can select multiple option"}
                    isMulpleChoice={isMulpleChoice}
                  />
                </View>
                {/* ---------------------------------Substance screen */}
                <View style={{ width: "100%", marginTop: 15, marginBottom: 0 }}>
                  <RadioOptions
                    title={"Substance screen"}
                    color={"#00B0F0"}
                    DATA={optionObjectArry[4].organDonor}
                    setSelectedOption={setSelectedOptionEthinicity}
                    layout="row"
                    selectedOption={selectedOptionEthnicity}
                  />
                </View>
                <View style={{ width: "100%", marginBottom: 50 }}>
                  <SubstanceScreenModal
                    modalVisible={modalVisibleBloodProductInEmergency}
                    setModalVisible={setModalVisibleBloodProductInEmergency}
                    selectedOption={selectedOptionBloodProductInEmergency}
                    setSelectedOption={setSelectedOptionBloodProductInEmergency}
                    DATA={bloodProductInEmergency}
                    setDATA={setBloodProductInEmergency}
                    text="Blood product in emergency"
                    boderRad={12}
                    subHead={"You can select multiple option"}
                  />
                </View>
              </View>
            </View>

            {/* <View style={styles.textInputContainer}>
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
              />
            </View>
          </View>
          <View style={{ width: "100%", marginTop: 15 }}>
            <ModalScreenV2
              modalVisible={modalVisibleMaritalStatus}
              setModalVisible={setModalVisibleMaritalStatus}
              selectedOption={selectedOptionMaritalStatus}
              setSelectedOption={setSelectedOptionMaritalStatus}
              DATA={optionObjectArry[2].maritalStatus}
              text="Marital status "
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
            />
          </View> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
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
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderColor: "#EAECED",
    borderRadius: 10,
    backgroundColor: "#ffff",
  },
  inputRight: {
    width: "75%",
    height: 40,
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
    height: 40,
    borderWidth: 1,
    borderColor: "#EAECED",
    padding: 10,
    backgroundColor: "#ffff",
    borderRadius: 10,
  },
  preferredSelect: {
    marginTop: 10,
    backgroundColor: "#ffff",
    borderColor: "#EAECED",
    borderWidth: 1,
    borderRadius: 12,
    height: 40,
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

  // -----------------------------------------------------
  bmiCalculatorConatainer: {
    width: "100%",
    marginTop: 15,
    gap: 10,
  },
  bmiContent: {
    backgroundColor: "#FFFFFF",
    gap: 10,
    padding: 10,
    borderRadius: 12,
  },
  bmiContentRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  KGsSelectorRow: {
    width: "25%",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  WeightInputRow: {
    width: "75%",
    height: 48,
  },
  inputWeight: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: "#EAECED",
    padding: 10,
    backgroundColor: "#ffff",
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
  },

  // ----------------------------------
  AddAllergiesContent: {
    backgroundColor: "#FFFFFF",
    gap: 10,
    padding: 10,
    borderRadius: 12,
  },
  allergieRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  // ---------- other
  OthersContent: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 12,
  },
});
