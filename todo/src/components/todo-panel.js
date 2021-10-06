import React from 'react';
import { TodoList } from './todo-list';
import { useTodoLists } from './todo-provider';

export function TodoPanel() {
    const { todoLists, setTodoLists } = useTodoLists();
  
    return (
      <React.Fragment>
        {todoLists.map((listItem, dayIndex) => (
          <TodoList
            key={dayIndex}
            dayIndex={dayIndex}
            onChange={(itemIndex) => {
              let temp = JSON.parse(JSON.stringify(todoLists));
              temp[dayIndex].list[itemIndex].isDone =
                !temp[dayIndex].list[itemIndex].isDone;
              setTodoLists(temp);
            }}
          />
        ))}
      </React.Fragment>
    );
  }