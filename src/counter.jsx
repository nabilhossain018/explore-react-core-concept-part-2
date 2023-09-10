import { useState } from "react"
import './App.css'

export default function Counter () {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
       const addCount = count + 1;
       setCount(addCount);
    }
    const handleReduce = () => {
        const reduceCount = count - 1;
        setCount(reduceCount);
    }

    return (
        <div style={{border: "3px solid red", borderRadius:"10px", padding:"10px"}}>   
            <h3>
                Counter :{count}
            </h3>
            <button className="handle" onClick={handleAdd}>
                Add   number
            </button>
            <button className="handle" onClick={handleReduce}>
                Reduce  number
            </button>
            <button onClick={() =>{
                const co =count + 5;
                setCount(co);
            }}>
                add 5 number
            </button>
        </div>
    )
}