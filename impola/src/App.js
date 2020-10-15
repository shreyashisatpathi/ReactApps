import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = props=> {
 const [personState,setPersonstate] = useState( {
    persons :[
    {name : 'Shreya', age : '33'},
    {name :'Shanu', age : '56' },
    {name :'Monu', age :'60'}
    ]
  }
 )

 const switchNameHandler = () =>{
  setPersonstate({
    persons:[
    {name: 'Kuttu', age: '33'},
    {name:'Mala', age:'20'},
    {name:'Sala', age:'40'}
    ]
  })
}
    return (
      <div className='App'>
        <h1>Hi I am a react app</h1>
        <p>this is really working</p>
        <button onClick ={switchNameHandler}>Switch name</button>
        <Person 
        name = {personState.persons[0].name}
        age ={personState.persons[0].age}/>
        <Person
         name = {personState.persons[1].name} 
         age ={personState.persons[1].age}/>
        <Person 
        name = {personState.persons[2].name} 
        age ={personState.persons[2].age}> My hobbies:Racing
        </Person>
      </div>
    )
}
export default app;


