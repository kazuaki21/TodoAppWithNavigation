import React, { FC, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/RootStack";
import { Todo } from "../types";

import IconButton from "../components/IconButton";
import TodoList from "../components/TodoList";

type NavigationProps = StackNavigationProp<RootStackParamList>;

export type ListContainerProps = {
  todos: Todo[];
  onPressCheck?: (todoId: number) => void;
  onPressDelete?: (todoId: number) => void;
};

const ListContainer: FC<ListContainerProps> = ({
  todos = [],
  onPressCheck = () => undefined,
  onPressDelete = () => undefined
}) => {
  const { navigate, setOptions } = useNavigation<NavigationProps>();

  const handlePressPlus = () => {
    navigate("Add");
  };

  useEffect(() => {
    setOptions({
      headerRight: () => (
        <IconButton
          type="plus"
          onPress={handlePressPlus}
          style={styles.plus_button}
        />
      )
    });
  }, []);

  return (
    <View style={styles.container}>
      <TodoList
        todos={todos}
        onPressCheck={onPressCheck}
        onPressDelete={onPressDelete}
      />
    </View>
  );
};

export default ListContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  header_container: {
    alignItems: "center",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "gray"
  },
  todo: {
    borderBottomWidth: 1,
    borderColor: "gray"
  },
  plus_button: {
    marginRight: 30
  }
});
