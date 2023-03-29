import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  text,
} from "react-native";
import React from "react";
import { Modal } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Pressable } from "react-native";
export default function ModalScreenV2({
  modalVisible,
  setModalVisible,
  selectedOption,
  setSelectedOption,
  DATA,
  setDATA,
  text,
  boderRad,
  multipleSelect,
  subHead,
  isMulpleChoice,
}) {
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
      <>
        {multipleSelect ? (
          <TouchableOpacity
            onPress={() => {
              if (multipleSelect) {
                addOptionHandler(item);
              } else {
                setModalVisible(false);
                setSelectedOption(item);
              }
            }}
            style={[
              styles.OptionItem,
              {
                backgroundColor:
                  item.selected === true ? "#F5F8F9" : "transparent",
              },
            ]}
          >
            <View style={{ width: 20 }}>
              {item.selected && (
                <Icon
                  name="check"
                  size={15}
                  style={{ color: "black", paddingLeft: 5 }}
                />
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
        ) : (
          <TouchableOpacity
            onPress={() => {
              if (multipleSelect) {
                addOptionHandler(item);
              } else {
                setModalVisible(false);
                setSelectedOption(item);
              }
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
        )}
      </>
    );
  };
  const removeFromSelectedList = (item) => {
    const newState = DATA.map((selectItem) => {
      if (selectItem.id === item.id) {
        return { ...selectItem, selected: !selectItem.selected };
      }
      return selectItem;
    });
    setDATA(newState);
  };
  return (
    <>
      {multipleSelect === true ? (
        <TouchableOpacity
          disabled={isMulpleChoice}
          onPress={() => setModalVisible(true)}
          style={[
            styles.preferredSelect,
            {
              borderTopEndRadius: boderRad,
              borderBottomRightRadius: boderRad,
              minHeight: 48,
            },
          ]}
        >
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              flexWrap: "wrap",
              paddingVertical: 10,
            }}
          >
            {!isMulpleChoice && (
              <Text
                style={{
                  fontSize: 16,
                  color: "gray",
                }}
              >
                {text}
              </Text>
            )}
            {DATA.map((item) =>
              item.selected === true ? (
                <TouchableOpacity
                  onPress={() => {
                    removeFromSelectedList(item);
                  }}
                  key={item.id}
                  style={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#E9F7F4",
                    margin: 3,
                    padding: 2,
                    borderRadius: 50,
                    flexDirection: "row",
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    gap: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#747E80",
                    }}
                  >
                    {item.name}
                  </Text>
                  <Icon name="close" size={10} />
                </TouchableOpacity>
              ) : null
            )}

            {/* ------------------------- */}
          </View>

          <TouchableOpacity
            style={{
              height: "100%",
              width: "10%",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              paddingTop: 15,
              paddingRight: 5,
            }}
            onPress={() => setModalVisible(true)}
          >
            <Icon name="down" />
          </TouchableOpacity>
        </TouchableOpacity>
      ) : (
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
      )}

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
              <Text style={styles.modalText}>{text}</Text>

              <Text style={{ width: "5%" }}> </Text>
            </View>
            {subHead && (
              <Text
                style={{
                  width: "90%",
                  marginTop: 20,
                  fontSize: 16,
                  color: "#D0990A",
                }}
              >
                {subHead}
              </Text>
            )}
            <FlatList
              style={[styles.optionListContaner, { marginTop: subHead && 0 }]}
              data={DATA}
              keyExtractor={(item) => item.id}
              renderItem={OptionList}
            />
          </View>
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
    margin: 20,
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
