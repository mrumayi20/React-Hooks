import { useState } from 'react';

export const StateExample = () => {
    let [count, setCount] = useState(0);

    const increment = () =>{
        setCount((prev)=> prev+1);
    }

    return (
        <div>
            <p>Count: {count} </p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}