// import React,{useState,useEffect,useRef} from "react";


// function CounterWithPrev(){
//   const [count,setCount] = useState(0);
//   const prevCountRef = useRef();

//   //create a ref to store the previous value 
//   useEffect(()=>{
//     prevCountRef.current=count;
//   },[count])

//   return(
//     <div>
//       <p>Current Count: {count}</p>
//       <p>prevCount: {prevCountRef.current}</p>

//       <button onClick={()=>setCount(count+1)}>Increment</button>
//     </div>
//   )
    
// }

// export default CounterWithPrev;
// import React, { useReducer } from 'react';
// import './App.css';
// import confetti from 'canvas-confetti';

// function appleReducer(state, action) {
//   switch (action.type) {
//     case 'ADD_APPLE':
//       return state + 1;
//     case 'EAT_APPLE':
//       return state > 0 ? state - 1 : state;
//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(appleReducer, 4);

//   const handleEatApple = () => {
//     if (state > 0) {
//       dispatch({ type: 'EAT_APPLE' });
//       confetti({
//         particleCount: 100,
//         spread: 70,
//         origin: { y: 0.6 }
//       });
//     }
//   };
//   const handleAddApple = () => {
//     if (state > 0) {
//       confetti({
//         particleCount: 200,
//         spread: 70,
//         origin: { y: 0.6 }
//       });
//     }
//   };

//   return (
//     <div>
//       <center>
//       <h1>NUMBER OF APPLES: {state}</h1>
//       <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
//         {Array.from({ length: state }).map((_, index) => (
//           <img
//             key={index}
//             src="https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg"
//             alt="Apple"
//             style={{ width: '150px', height: '200px', margin: '5px' }}
//           />
//         ))}
//       </div>
//       <a onClick={handleAddApple}>
//       <button className='a' onClick={() => dispatch({ type: 'ADD_APPLE' }) } >ADD APPLE</button>
//      </a>
//       {/* onClick={() => dispatch({ type: 'ADD_APPLE' }) }> */}
        
//       <button className='b' onClick={handleEatApple}>EAT APPLE</button>
//       </center>
//     </div>
//   );
// }

// export default App;
// 

// function App(){
//   const handleclick =()=>{
//     alert("BUtton Clicked")
//   };
//   return(
//     <button onClick={handleclick}>Click ME</button>
//   )
// }
// export default App;

// import React,{useState} from "react";

// function App(){
//   const[text,setText] = useState("")
  
//   const handleChange = (event) => {
//     setText(event.target.value)
//   }

//   return(
//     <div>
//       <input type="text" value={text} onChange={handleChange}/>
//       <p>Your Text:{text}</p>
//     </div>
    
//   )
// }
// export default App;

import React,{use, useState} from "react";

function App(){
  const[isHovered, setIsHovered] = useState(false);
  const handleMouseEnter=()=>{
    setIsHovered(true);
  }
  const handleMouseLeave=()=>{
    setIsHovered(false);
  }

  return(
    <div>
      <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      style={{backgroundColor:isHovered ? 'lightblue':'lightgray',color:isHovered ? 'white':'black'}}
      >Hover</button>

      {isHovered && <p>Mouse is over the button</p>}
    </div>
  )
}
export default App;