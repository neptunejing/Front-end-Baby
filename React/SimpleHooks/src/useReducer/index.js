import React from 'react';
import { useReducer, useState } from 'react';
import { render } from 'react-dom';

function Checkbox() {
	// checked 初始为 false
	// 每次执行 toggle，返回 !checked 作为最新 checked
	const [checked, toggle] = useReducer((checked) => !checked, false);

	return (
		<>
			<input type='checkbox' value={checked} onChange={toggle} />
			{checked ? 'checked' : 'not checked'}
		</>
	);
}

function Count() {
	// number 初始为 0
	// 每次点击执行 setNumber，当前值作为第一参数，传入值作为第二参数，返回计算结果
	const [number, setNumber] = useReducer(
		(number, newNumber) => number + newNumber,
		0
	);

	return <h3 onClick={() => setNumber(30)}>{number}</h3>;
}

const firstUser = {
	id: '1',
	name: 'Bill',
	city: 'Shanghai',
	age: '23',
	admin: false,
};

function User() {
    // 使用 useReducer, 用解构的参数覆盖旧属性，同时保留其他属性
	const [user, setUser] = useReducer((user, newDetails) => ({
		...user,
		...newDetails,
	}), firstUser);
	return (
		<div>
			<h3>
				{user.name} - {user.age} from {user.city}
			</h3>
			<h3>{user.admin ? 'admin' : 'user'}</h3>
			<button onClick={() => setUser({ admin: true })}>Make Admin</button>
		</div>
	);
}

function App() {
	return (
		<>
			<Checkbox />
			<Count />
			<User />
		</>
	);
}

render(<App />, document.getElementById('app'));
