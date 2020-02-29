import React, { FC, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Todo } from "./src/types";

import Loading from "./src/components/Loading";
import RootStack from "./src/navigation/RootStack";

import mock from "./src/__mock__/todos.json";

const App: FC = () => {
  const [ready, setReady] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);

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

  const handlePressAdd = (title: string, description: string) => {
    const newTodo: Todo = {
      id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
      title,
      description,
      done: false
    };
    addTodo(newTodo);
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
    <NavigationContainer>
      <RootStack
        todos={todos}
        onPressCheck={handlePressCheck}
        onPressDelete={handlePressDelete}
        onPressAdd={handlePressAdd}
      />
    </NavigationContainer>
  );
};

export default App;
