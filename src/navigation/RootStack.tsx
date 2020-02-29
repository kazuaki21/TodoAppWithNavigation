import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ListContainer, { ListContainerProps } from "../containers/ListContainer";
import AddContainer, { AddContainerProps } from "../containers/AddContainer";

export type RootStackParamList = {
  List: undefined;
  Add: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

type RootStackProps = ListContainerProps & AddContainerProps;

const RootStack: FC<RootStackProps> = ({
  todos = [],
  onPressCheck = () => undefined,
  onPressDelete = () => undefined,
  onPressAdd = () => undefined
}) => {
  return (
    <Stack.Navigator
      initialRouteName="List"
      headerMode="screen"
      screenOptions={{
        headerTitleStyle: styles.header_title
      }}
    >
      <Stack.Screen name="List">
        {() => (
          <ListContainer
            todos={todos}
            onPressCheck={onPressCheck}
            onPressDelete={onPressDelete}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Add">
        {() => <AddContainer onPressAdd={onPressAdd} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default RootStack;

const styles = StyleSheet.create({
  header_title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "royalblue"
  }
});
