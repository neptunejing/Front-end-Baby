import React from 'react';
import { TodoItem } from "./todo-item";
import { useTodoLists } from './todo-provider';

export function TodoList({ dayIndex, onChange = (f) => f }) {
    const { title, list } = useTodoLists().todoLists[dayIndex];
    return (
      <div id='todolist-container'>
        <div>{title}</div>
        <ul>
          {list.map((item, index) => (
            <TodoItem
              key={index}
              dayIndex={dayIndex}
              itemIndex={index}
              onChange={() => onChange(index)}
            />
          ))}
        </ul>
      </div>
    );
  }