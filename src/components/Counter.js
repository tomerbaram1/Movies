import { useState } from "react";
import "./counter.css"
const CounterNum = ()=>{
    const [count, setCount] = useState(0);
    const plusCount = ()=>{
        setCount (count+1)
    }
    const minusCount = ()=>{
        setCount (count-1)
    }
    return(
        <div className="count-container">
            <button onClick={minusCount}>👎</button>
            <span>{count}</span>
            <button onClick={plusCount}>👍</button>
        </div>

    )}
    export default CounterNum

