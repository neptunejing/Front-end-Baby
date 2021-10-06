import React from "react";
import { useState, createContext, useContext } from "react";
import { initLists } from "../constants";

const TodoContext = createContext();
export const useTodoLists = () => useContext(TodoContext);

export function TodoProvider({children}) {
	const [todoLists, setTodoLists] = useState(initLists);
	return (
	  <TodoContext.Provider value={{ todoLists, setTodoLists}}>
	      {children}
	  </TodoContext.Provider>
  )
}