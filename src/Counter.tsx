import React from 'react';
import counter from "./store/counter";

const Counter = () => {
    return (
        <div>
            { `Count = ${counter.count}` }
            <button>+</button>
            <button>-</button>
        </div>
    );
};

export default Counter;