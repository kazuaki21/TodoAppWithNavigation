import React, { FC, Fragment, useState, useEffect } from "react";
import { Modal } from "react-native";

import { Todo } from "./src/types";
type Mode = "list" | "add";

import Loading from "./src/components/Loading";
import ListContainer from "./src/containers/ListContainer";
import AddContainer from "./src/containers/AddContainer";

import mock from "./src/__mock__/todos.json";

const App: FC = () => {
  const [ready, setReady] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [mode, setMode] = useState<Mode>("list");

  const changeMode = (mode: Mode) => {
    setMode(mode);
  };

  const addTodo = (todo: Todo) => {
    setTodos(todos => [...todos, todo]);
  };

  const toggleDone = (id: number) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id !== id
          ? todo
          : {
              ...todo,
              done: !todo.done
            }
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const handlePressPlus = () => {
    changeMode("add");
  };

  const handlePressCancel = () => {
    changeMode("list");
  };

  const handlePressAdd = (title: string, description: string) => {
    const newTodo: Todo = {
      id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
      title,
      description,
      done: false
    };
    addTodo(newTodo);

    changeMode("list");
  };

  const handlePressCheck = (id: number) => {
    toggleDone(id);
  };

  const handlePressDelete = (id: number) => {
    deleteTodo(id);
  };

  const getReady = () => {
    setTodos(mock.todos);

    setReady(true);
  };

  useEffect(() => {
    getReady();
  }, []);

  if (!ready) return <Loading />;

  return (
    <Fragment>
      <ListContainer
        todos={todos}
        onPressPlus={handlePressPlus}
        onPressCheck={handlePressCheck}
        onPressDelete={handlePressDelete}
      />
      <Modal visible={mode === "add"} animationType={"slide"}>
        <AddContainer
          onPressCancel={handlePressCancel}
          onPressAdd={handlePressAdd}
        />
      </Modal>
    </Fragment>
  );
};

export default App;
