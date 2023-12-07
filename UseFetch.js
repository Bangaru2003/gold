import  {useState } from "react";
function UseCounter(){
    const [count, setCount]=UseCounter();
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount();
    }
    return[count, increment, decrement, reset];
};
export default UseCounter;