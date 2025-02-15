import React,{useState,useEffect,useRef} from "react";


function CounterWithPrev(){
  const [count,setCount] = useState(0);
  const prevCountRef = useRef();

  //create a ref to store the previous value 
  useEffect(()=>{
    prevCountRef.current=count;
  },[count])

  return(
    <div>
      <p>Current Count: {count}</p>
      <p>prevCount: {prevCountRef.current}</p>

      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
    
}

export default CounterWithPrev;