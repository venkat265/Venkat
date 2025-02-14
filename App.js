import React,{useReducer}from 'react'
import './App.css';


function appleReducer(state=3,action){
  switch(action.type){
    case 'ADD_APPLE':
      return state+1 ;
    
    case 'EAT_APPLE' :
      return state-1;
      
    default:
      return state;  

  }
}

function App(){
  const[state,dispatch]=useReducer(appleReducer,3)
  return(
    <div>
      <h1>Apple Counter</h1>
      <p>NUMBER OF APPLES:{state}</p>

      <button className='a'  onClick={()=>dispatch({type:'ADD_APPLE'})}> ADD APPLE</button>
      <button className='b' onClick={()=>dispatch({type:'EAT_APPLE'})}> EAT APPLE</button>
      </div>
  )

}
export default App;