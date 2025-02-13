// import {useState} from "react";

// import ChildA from "./ChildA"
// import ChildB from "./ChildB"

// const Parent=()=>{
//     const[count,setCount]=useState(0);
//     const increment=()=>{
//         setCount(c=>c+1);

//     }
//     return(
//         <div>
//             <ChildA/>
//             <ChildB count={count} increment={increment}/>
//         </div>

//     )
// }
// export default Parent;

// function App() {
//     const data = "Hello I Am Venkata Ganesh";
//     return (
//       <div>
//         <User1 data={data} />
//         <User2 data={data} />
//         <User3 data={data} />
//         <User4 data={data} />
//       </div>
//     );
//   }
  
//   function User1({ data }) {
//     return <h2>User 1: {data}</h2>;
//   }
  
//   function User2({ data }) {
//     return <h2>User 2: {data}</h2>;
//   }
  
//   function User3({ data }) {
//     return <h2>User 3: {data}</h2>;
//   }
  
//   function User4({ data }) {
//     return <h2>User 4: {data}</h2>;
//   }
  
//   export default App;

// import React,{createContext, useContext}from 'react';
// const DataContext = createContext();

// function App(){
//   const data="Hello I am venkata Ganesh Maddineni "
//   return(
//     <DataContext.Provider value={data}>
// <User1></User1>
//     </DataContext.Provider>
//   )
// }
// // user1 compomnent
// function User1({data}){
//   return<User2 />
// }
// function User2({data}){
//   return<User3/>
// }
// function User3({data}){
//   return<User4 />
// }
// function User4(){
//   const data=useContext(DataContext)
//   return<div>{data}</div>
// }
// export default App;

import React from 'react';

// Profile Component (target component)
function Profile({ name, email }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

// Child Component 2
function Child2({ name, email }) {
  return <Profile name={name} email={email} />;
}

// Child Component 1
function Child1({ name, email }) {
  return <Child2 name={name} email={email} />;
}

// App Component (parent component)
function App() {
  const user = {
    name: 'Maddineni Venkata Ganesh',
    email: 'venkataganeshmaddineni@gmail.com',
  };

  return (
    <div>
      <Child1 name={user.name} email={user.email} />
    </div>
  );
}

export default App;
