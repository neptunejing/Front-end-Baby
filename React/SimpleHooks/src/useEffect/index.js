import React, { useLayoutEffect } from 'react';
import { render } from 'react-dom';
import { NewsFeed } from './news-feed';
import { useState } from 'react';

function App({ sourceURL }) {
	const [start, setStart] = useState(false);

	return (
		<>
			<input
				type='button'
				value={start ? '关闭订阅' : '开启订阅'}
				onClick={() => setStart(!start)}
			/>
			{start && <NewsFeed sourceURL={sourceURL} />}
		</>
	);
}

render(<App sourceURL='google' />, document.getElementById('app'));
