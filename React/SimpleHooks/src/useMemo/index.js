import React from 'react';
import { render } from 'react-dom';
import { NewsFeed } from './news-feed';
import { useState, useMemo } from 'react';

function App() {
	const [userInput, setUserInput] = useState('');
	const [currentURL, setCurrentURL] = useState('');
	// sourceURL 依赖 currentURL，当后者不变时，多次提交也不会触发重新计算
	const sourceURL = useMemo(() => `www.${currentURL}.com`, [currentURL]);

	return (
		<>
			<form
				onSubmit={(e) => {
					setCurrentURL(userInput);
					e.preventDefault(); // 不阻止默认行为则会触发刷新
				}}>
				<input
					type='text'
					placeholder='请输入要订阅的 URL'
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
				/>
				<input type='submit' value={'更新订阅'} />
			</form>

		    {/* 
			sourceURL 实际上可直接设为 www.${currentURL}.com ，相同 currentURL 下也不会重新渲染，这里主要为了是否 Memo 用法 
			*/}
			{currentURL && <NewsFeed sourceURL={sourceURL} />}
		</>
	);
}

render(<App />, document.getElementById('app'));
