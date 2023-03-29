import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Modal } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Pressable } from "react-native";
export default function SubstanceScreenModal({
  modalVisible,
  setModalVisible,
  selectedOption,
  setSelectedOption,
  DATA,
  setDATA,
  text,
  boderRad,
  multipleSelect,
}) {
  const [filterDataSource, setFilterDataSource] = useState(DATA);
  const [search, setSearch] = useState("");
  const OptionList = ({ item }) => {
    const addOptionHandler = (item) => {
      const newState = DATA.map((selectItem) => {
        if (selectItem.id === item.id) {
          return { ...selectItem, selected: !selectItem.selected };
        }
        return selectItem;
      });
      setDATA(newState);
    };

    return (
      <TouchableOpacity
        onPress={() => {
          setModalVisible(false);
          setSelectedOption(item);
        }}
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
            fontSize: 16,
            color: selectedOption.id === item.id ? "black" : "gray",
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = DATA.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterDataSource(newData);
      setSearch(text);
    } else {
      setFilterDataSource(DATA);
      setSearch(text);
    }
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={[
          styles.preferredSelect,
          {
            borderTopEndRadius: boderRad,
            borderBottomRightRadius: boderRad,
            height: 48,
          },
        ]}
      >
        <Text
          style={{
            color: selectedOption.length === 0 ? "gray" : "black",
          }}
        >
          {selectedOption.length === 0 ? text : selectedOption.name}
        </Text>
        <Icon name="down" />
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.modalView}>
              <View style={styles.modelHeader}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(false)}
                >
                  <Icon name="close" size={20} />
                </Pressable>
                <Text style={styles.modalText}>{text}</Text>

                <Text style={{ width: "5%" }}> </Text>
              </View>
              <View
                style={{
                  width: "92%",
                  borderRadius: 16,
                  height: 36,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 10,
                  gap: 10,
                  borderWidth: 1,
                  borderColor: "#E3E3E3",
                  marginTop: 25,
                }}
              >
                <Icon name="search1" size={18} />
                <TextInput
                  value={search}
                  onChangeText={(text) => {
                    searchFilterFunction(text);
                  }}
                  placeholder="Search blood product"
                  placeholderTextColor="#747E80"
                  style={{
                    fontSize: 12,
                    fontWeight: 400,

                    width: "90%",
                    height: 36,
                  }}
                />
              </View>
              {filterDataSource.length === 0 && (
                <Text
                  style={{ color: "#D0990A", marginTop: 50, fontWeight: 500 }}
                >
                  No any item Found
                </Text>
              )}
              <FlatList
                style={[styles.optionListContaner]}
                data={filterDataSource}
                keyExtractor={(item) => item.id}
                renderItem={OptionList}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </>
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
  preferredSelect: {
    marginTop: 0,
    backgroundColor: "#ffff",
    borderColor: "#EAECED",
    borderWidth: 1,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    paddingHorizontal: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalView: {
    minHeight: 200,
    margin: 20,
    marginBottom: 30,
    backgroundColor: "white",
    borderRadius: 24,
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
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    width: "80%",
  },
  optionListContaner: {
    width: "100%",
    marginTop: 0,
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
