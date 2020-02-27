import React, { FC } from "react";
import {
  StyleSheet,
  View,
  ViewStyle,
  TextInput,
  TextInputProps
} from "react-native";

type TextInputOutlineProps = TextInputProps & {
  containerStyle?: ViewStyle;
};

const TextInputOutline: FC<TextInputOutlineProps> = ({
  containerStyle,
  ...props
}) => {
  return (
    <>
      <View style={[styles.frame, containerStyle]}>
        <TextInput {...props} />
      </View>
    </>
  );
};

export default TextInputOutline;

const styles = StyleSheet.create({
  frame: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    padding: 15,
    borderWidth: 1,
    borderRadius: 10
  }
});
