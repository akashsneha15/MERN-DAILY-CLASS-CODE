import { useState } from "react";

const CounterFBCState = (props) => {
    let [count, setCount] = useState(0);    //0 is stored in count and setCount is used to mutate the value i.e 0
    
    return (
        <>
            <h3>Function Based Component</h3>
            <h4>Props Data:{props.role}, {props.fullDetails} </h4>
            <h1>Count: {count}</h1>
            <button onClick={() => { setCount(count + 1) }}>
                Increment
            </button>
            <button onClick={() => { setCount(0) }}>Reset</button>
            <button onClick={() => { setCount(count - 1) }}>
                Decrement
            </button>
        </>
    )

}
export default CounterFBCState;