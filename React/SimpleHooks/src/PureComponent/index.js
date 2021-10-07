import React, { useState, memo } from 'react';
import { render } from 'react-dom';

const Cat = ({ name }) => {
	console.log(`rendering ${name}`);
	return <p>{name}</p>;
};

// const PureCat = memo(({ name, meow = (f) => f }) => {
// 	console.log(`rendering ${name}`);
// 	return <p onClick={() => meow(name)}>{name}</p>;
// });

const PureCat = memo(
	Cat,
	(prevProps, nextProps) => prevProps.name === nextProps.name
);

function App() {
	const [cats, setCats] = useState(['Biscuit', 'Jungle', 'Outlaw']);
	return (
		<>
			{cats.map((cat, index) => (
				<PureCat
					key={index}
					name={cat}
					meow={(cat) => console.log(`${cat} has meowed`)}
				/>
			))}
			<button onClick={() => setCats([...cats, 'new cat'])}>
				Add a cat
			</button>
		</>
	);
}

render(<App />, document.getElementById('app'));
