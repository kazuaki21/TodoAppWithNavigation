import React, { FC } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

const Loading: FC = () => {
  return (
    <View style={styles.loading_container}>
      <ActivityIndicator size={"large"} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loading_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
