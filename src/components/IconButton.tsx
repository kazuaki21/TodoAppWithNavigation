import React, { FC } from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

type IconButtonProps = {
  type: "trash-alt" | "plus";
  size?: number;
  color?: string;
  style?: ViewStyle;
  onPress?: () => void;
};

const IconButton: FC<IconButtonProps> = ({
  type = "",
  size = 24,
  color = "royalblue",
  style = {},
  onPress = () => undefined
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <FontAwesome5 name={type} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;
