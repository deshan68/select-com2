import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

export default function RadioOptions({
  title,
  color,
  DATA,
  setSelectedOption,
  layout,
  selectedOption,
}) {
  return (
    <View>
      <Text style={{ fontSize: 16, color: "#18282C", marginBottom: 5 }}>
        {title}
      </Text>
      <View style={{ flexDirection: layout }}>
        {DATA.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => setSelectedOption(item)}
            style={{
              flexDirection: "row",
              gap: 10,
              marginRight: 20,
              marginVertical: 7,
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <>
              {selectedOption.id === item.id ? (
                <Icon name="circle-slice-8" size={20} color={color} />
              ) : (
                <Icon name="circle-outline" size={20} color={"#C0C0C0"} />
              )}
            </>
            <Text style={{ color: "#18282C", fontSize: 14, fontWeight: "500" }}>
              {item.name}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
