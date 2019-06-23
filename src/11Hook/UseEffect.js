import React, { useState, useEffect } from 'react';

function UseEffectComp(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('useEffect: ', count);
    }, [count]);

    return (
        <div>
            <h1>{ props.title }</h1>
            <p>You clicked {count} times</p>
            <button
                onClick={() => setCount(count + 1)}>
                Click Me
            </button>
        </div>
    );
}

export default UseEffectComp;
