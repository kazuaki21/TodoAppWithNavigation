import React, { FC } from "react";
import { StyleSheet, View, ViewStyle, Text } from "react-native";
import IconButton from "./IconButton";
import CheckBox from "./CheckBox";

import * as type from "../types";

type TodoProps = {
  todo: type.Todo;
  onPressCheck?: () => void;
  onPressDelete?: () => void;
  style?: ViewStyle;
};

const Todo: FC<TodoProps> = ({
  todo: { title, description, done },
  onPressCheck = () => undefined,
  onPressDelete = () => undefined,
  style = {}
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.left_container}>
        <CheckBox
          checked={done}
          onPress={onPressCheck}
          containerStyle={styles.checkbox}
        />
        <View>
          <Text numberOfLines={1} style={[styles.title, done && styles.done]}>
            {title}
          </Text>
          <Text
            numberOfLines={1}
            style={[styles.description, done && styles.done]}
          >
            {description}
          </Text>
        </View>
      </View>
      <IconButton type="trash-alt" color="slategray" onPress={onPressDelete} />
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 90,
    paddingHorizontal: 24
  },
  left_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  checkbox: {
    marginRight: 16
  },
  title: {
    fontSize: 24
  },
  description: {
    fontSize: 16,
    marginTop: 5
  },
  done: {
    color: "gray",
    textDecorationLine: "line-through"
  }
});
