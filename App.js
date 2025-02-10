import React from 'react';

//counter component

const Counter=()=>{
  const [count,setCount]=React.useState(0);
  //current state count
  //use state() to intialize
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default Counter;