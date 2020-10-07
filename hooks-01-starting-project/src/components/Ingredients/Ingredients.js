import React, {useEffect, useState, useCallback} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';
const Ingredients = () => {
 const [currentState,setIngredientState] = useState([]);

 useEffect (()=> {
   console.log('Rendering Ingredient',currentState);
 },[currentState])

 const filterIngredientHandler = useCallback((fileredIngredient)=>{
  console.log("setting in state....")
  setIngredientState(fileredIngredient)
  console.log('after setting state with Ingredient', currentState);
 }, [])

 const addIngredientHandler = ingredient =>{
   fetch('https://react-hook-backend.firebaseio.com/ingredients.json',{
     method: 'POST',
     body: JSON.stringify(ingredient),
     headers: {'Content-Type': 'application/json'}
   }).then((result)=>{
       return result.json()
      }).then(data =>{
       console.log(data)
       setIngredientState (prevIngredients=>[
      ...prevIngredients,
      {id:data.name, ...ingredient}
    ])
  },
     (error)=>{}
   )
  }
  return (
    <div className="App">
      <IngredientForm addIngredient = {addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filterIngredientHandler}/>
        <IngredientList myIngredients = {currentState}/>
      </section>
    </div>
  );
}

export default Ingredients;
