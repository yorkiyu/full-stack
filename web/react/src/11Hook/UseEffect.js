import React, { useState, useEffect } from 'react';

function UseEffectComp(props) {
    const [count, setCount] = useState(0);
    const [oddCount, setOddCount] = useState(0);
    const [evenCount, setEvenCount] = useState(0);

    // 奇数记录
    useEffect(() => {
        if (count % 2 === 1) {
            setOddCount(oddCount + 1);
        }
    }, [count]);

    // 偶数记录
    useEffect(() => {
        if (count % 2 === 0) {
            setEvenCount(evenCount + 1);
        }
    }, [count]);

    return (
        <div>
            <h1>{ props.title }</h1>
            <p>You clicked { count } times</p>
            <p>Odd { oddCount } times</p>
            <p>Even { evenCount } times</p>
            <button
                onClick={() => setCount(count + 1)}>
                Click Me
            </button>
        </div>
    );
}

export default UseEffectComp;
