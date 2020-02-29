import React, { FC, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/RootStack";

import TextButton from "../components/TextButton";
import TextInputOutline from "../components/TextInput";

type NavigationProps = StackNavigationProp<RootStackParamList>;

export type AddContainerProps = {
  onPressAdd?: (title: string, description: string) => void;
};

const AddContainer: FC<AddContainerProps> = ({
  onPressAdd = () => undefined
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { goBack } = useNavigation<NavigationProps>();

  const handlePressAdd = () => {
    if (!title || !description) return;

    onPressAdd(title, description);
    goBack();
  };

  return (
    <View style={styles.container}>
      <TextInputOutline
        placeholder="Title"
        value={title}
        onChangeText={text => setTitle(text)}
        style={styles.textinput}
        containerStyle={styles.todo_title}
      />
      <TextInputOutline
        placeholder="Description"
        value={description}
        onChangeText={text => setDescription(text)}
        style={styles.textinput}
        containerStyle={styles.todo_description}
      />
      <View style={styles.add_button}>
        <TextButton onPress={handlePressAdd} style={styles.add}>
          Add
        </TextButton>
      </View>
    </View>
  );
};

export default AddContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  todo_title: { marginTop: 70 },
  todo_description: { marginTop: 30 },
  textinput: {
    width: 200,
    height: 40,
    fontSize: 24
  },
  cancel_button: {
    position: "absolute",
    top: 60,
    right: 30
  },
  add_button: {
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "royalblue",
    marginTop: 50
  },
  add: {
    fontSize: 24,
    color: "white"
  }
});
