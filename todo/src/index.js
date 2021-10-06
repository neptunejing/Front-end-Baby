import React from 'react';
import { render } from 'react-dom';
import { TodoProvider } from './components/todo-provider';
import { TodoPanel } from './components/todo-panel';

render(
	<TodoProvider>
		<TodoPanel />
	</TodoProvider>,
	document.getElementById('app')
);
