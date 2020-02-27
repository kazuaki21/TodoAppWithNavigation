import React, { FC } from "react";
import { StyleSheet, View, ViewStyle, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

type CheckBoxProps = {
  checked: boolean;
  size?: number;
  color?: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
};

const CheckBox: FC<CheckBoxProps> = ({
  checked = false,
  size = 24,
  color = "gray",
  onPress = () => undefined,
  containerStyle = {}
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <View style={[styles.frame, { width: size, height: size }]}>
        {checked ? (
          <FontAwesome5 name="check" size={size - 4} color={color} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  frame: {
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
    borderWidth: 1,
    borderRadius: 4,
    paddingTop: 2,
    paddingLeft: 1
  }
});
