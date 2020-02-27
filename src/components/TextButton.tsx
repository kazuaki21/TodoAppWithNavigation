import React, { FC } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextProps,
  ViewStyle
} from "react-native";

type TextButtonProps = TextProps & {
  onPress?: () => void;
  containerStyle?: ViewStyle;
};

const TextButton: FC<TextButtonProps> = ({
  onPress = () => undefined,
  style = {},
  containerStyle = {},
  ...props
}) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Text {...props} style={[styles.default, style]} />
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  default: {
    fontSize: 22,
    color: "royalblue"
  }
});
