import React, { useCallback, useEffect } from "react";
import { render } from "react-dom";
import { useAnyKeyToRender } from "./hooks";

function App() {
    useAnyKeyToRender();
    
    
    const fn = useCallback(() => {
        console.log('hello');
        console.log('world');
    }, []);

    // const fn = () => {
    //     console.log('hello');
    //     console.log('world');
    // };

    useEffect(() => {
        console.log('fresh render');
        fn();
    }, [fn]);

    return(<h3>open the console</h3>)
}

render(<App />, document.getElementById('app'));