import React from 'react';
import { useTodoLists } from './todo-provider';

export function TodoItem({ dayIndex, itemIndex, onChange = (f) => f }) {
	const todoItem = useTodoLists().todoLists[dayIndex].list[itemIndex];
	const input = (
		<React.Fragment>
			<input
				type='checkbox'
				checked={todoItem.isDone}
				onChange={onChange}
			/>
			{todoItem.time}&emsp;{todoItem.desc}
		</React.Fragment>
	);
	return <li>{todoItem.isDone ? <del>{input}</del> : input}</li>;
}
