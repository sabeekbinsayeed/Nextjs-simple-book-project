"use client"
import { useState } from "react";


const blog = () => {

    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1)
    }

    const handleDecrease = () => {
        setCount(count - 1)
    }



    return (
        <div>
            <h1>blog</h1>
            <h1>{count}</h1>
            <button onClick={handleIncrease}>increase</button>
            <button onClick={handleDecrease}>decrease</button>
        </div>
    );
};

export default blog;