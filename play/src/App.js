import React, { useState } from 'react';
import Person from './Person/Person'

const App = props => {
  const [personState,setPersonsState]= useState({
    persons : [
      {
        name :'Polax',
        age  :  33
      },
      {
        name :"Subho",
        age  : 50
      }
    ]
  });
  const clickHandler =()=> {
    setPersonsState({
      persons : [
        {
          name :'Ram',
          age  :  10
        },
        {
          name :"Sub",
          age  : 0
        }
      ] 
    } 
  )
  };

  

  return (
    <div className ="App">
        <p>
          Shreya
        </p>
        <button onClick ={clickHandler}>clickHere</button>
        <Person name = {personState.persons[0].name} age = {personState.persons[0].age}/>
        <Person name = {personState.persons[1].name} age = {personState.persons[1].age}>My Hobbies : Racing</Person>
      </div>
     );
  };  

  
export default App;
