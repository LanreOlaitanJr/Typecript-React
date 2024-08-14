import { useState } from "react"
import React from 'react';

const Count : React.FC = () => {

    const [count,setCount] = useState<number>(0);
    const increment = (e: React.MouseEvent<HTMLButtonElement>)=>{
        setCount(count+1);
        console.log('Increase Button clicked:', e);
        
    };
    const decrement = (e: React.MouseEvent<HTMLButtonElement>)=>{
        setCount(count-1)
        console.log('Decrease Button clicked:', e);
    };

    const reset = (e: React.MouseEvent<HTMLButtonElement>)=>{
        setCount(0);
        console.log('Reset Button clicked:', e);
    }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment} className="outline-none bg-purple-500 px-6 py-3 text-white rounded-md">Increment</button>
      <button onClick={decrement} className="outline-none bg-purple-500 px-6 py-3 text-white rounded-md">Decrement</button>
      <button onClick={reset} className="outline-none bg-purple-500 px-6 py-3 text-white rounded-md">Reset</button>
    </div>
  )
}

export default Count
