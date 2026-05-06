import React from "react";
import Nav from "./components/Nav";
import { Counter } from "./components/Counter";
//{ Counter } counter is given in braces bcoz export is done at declaration
import CounterFBCState from "./components/CounterFBCState";
import DisplayDetails from "./components/DisplayDetails";

const App = () => {

   let Name = "Sneha"
    let RollNo ="23NR1A0504"
    let Course = "CSE"
    let CollegeName = "BITS-VIZAG"
    let Role = "Student"
  return (
    <>
      <Nav />
      <Counter />
      {/* <CounterFBCState fullDetails={details} role={Role} />  */}
      <DisplayDetails Name={Name} RollNo={RollNo} Course={Course} CollegeName={CollegeName} Role={Role}/>
    </>
  )
}


export default App;
