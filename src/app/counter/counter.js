"use client";
import { useEffect, useState } from "react";

function reducer(state, action) {
    return state.count * 2;
}

export const Counter = () => {

    const [count, setCount] = useState(0)
    const [countTwice, setCountTwice] = useState(1)

    const increment = () => {
        console.log("Increment Clicked")
        setCount(count+1);
        console.log(count);
    }

    const decrment = () => {
        console.log("Decrement Clicked")
        setCount(count-1);
        console.log(count);
    }

    useEffect(()=> {
        setCountTwice(count * 2)
    }, [count])



    return (
        <div>
            <p>Count: {count}</p>
            <p>Count Twice: {countTwice}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={increment}>
                Increment
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={decrment}>
                Decrement
            </button>
        </div>
    );
} 