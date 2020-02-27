import React, { FC } from "react";
import { StyleSheet, FlatList } from "react-native";

import * as type from "../types";

import Todo from "./Todo";
import Empty from "./Empty";

type TodoListProps = {
  todos: type.Todo[];
  onPressCheck?: (todoId: number) => void;
  onPressDelete?: (todoId: number) => void;
};

const TodoList: FC<TodoListProps> = ({
  todos = [],
  onPressCheck = () => undefined,
  onPressDelete = () => undefined
}) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item: todo }) => (
        <Todo
          style={styles.todo}
          todo={todo}
          onPressCheck={() => onPressCheck(todo.id)}
          onPressDelete={() => onPressDelete(todo.id)}
        />
      )}
      ListEmptyComponent={() => <Empty style={styles.empty} />}
      keyExtractor={(_, index) => `todo_${index.toString()}`}
    />
  );
};

export default TodoList;

const styles = StyleSheet.create({
  todo: {
    borderBottomWidth: 1,
    borderColor: "gray"
  },
  empty: {
    marginTop: 20
  }
});
