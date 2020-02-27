import React, { FC } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import { Todo } from "../types";

import Title from "../components/Title";
import IconButton from "../components/IconButton";
import TodoList from "../components/TodoList";

type ListContainerProps = {
  todos: Todo[];
  onPressPlus?: () => void;
  onPressCheck?: (todoId: number) => void;
  onPressDelete?: (todoId: number) => void;
};

const ListContainer: FC<ListContainerProps> = ({
  todos = [],
  onPressPlus = () => undefined,
  onPressCheck = () => undefined,
  onPressDelete = () => undefined
}) => {
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <View style={styles.header_container}>
          <Title>Todo List</Title>
          <IconButton
            type="plus"
            onPress={onPressPlus}
            style={styles.plus_button}
          />
        </View>
        <TodoList
          todos={todos}
          onPressCheck={onPressCheck}
          onPressDelete={onPressDelete}
        />
      </View>
    </SafeAreaView>
  );
};

export default ListContainer;

const styles = StyleSheet.create({
  safearea: {
    flex: 1
  },
  container: {
    flex: 1
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
    position: "absolute",
    top: 10,
    right: 30
  }
});
