import React, { useState, useEffect } from 'react';

// 自定义Hook
function useCustomComp(count) {
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
    console.log('useCustomComp: ', oddCount, evenCount);
    return {
        oddCount,
        evenCount
    }
}

function CountComp(props) {
    const [count, setCount] = useState(0);
    // 当触发setCount时，会重新执行该函数
    const oddEven = useCustomComp(count);
    console.log('CountComp: ', oddEven);
    return (
        <div>
            <h1>{ props.title }</h1>
            <p>You clicked { count } times</p>
            <p>Odd { oddEven.oddCount } times</p>
            <p>Even { oddEven.evenCount } times</p>
            <button
                onClick={() => setCount(count + 1)}>
                Click Me
            </button>
        </div>
    );
}

export default CountComp;
