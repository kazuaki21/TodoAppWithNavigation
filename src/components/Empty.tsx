import React, { FC } from "react";
import { StyleSheet, View, Text, ViewProps } from "react-native";

type EmptyProps = ViewProps;

const Empty: FC<EmptyProps> = ({ style, ...props }) => {
  return (
    <View {...props} style={[styles.container, style]}>
      <Text style={styles.text}>Add Todo !!</Text>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
    color: "darkgray"
  }
});
