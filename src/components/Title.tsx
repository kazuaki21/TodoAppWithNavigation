import React, { FC } from "react";
import { StyleSheet, Text, TextProps } from "react-native";

type TitleProps = TextProps;

const Title: FC<TitleProps> = ({ style, ...props }) => {
  return <Text {...props} style={[styles.title, style]} />;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "royalblue"
  }
});
