import React, {useEffect, useState, useCallback} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';
const Ingredients = () => {
 const [currentState,setIngredientState] = useState([]);
 const [isLoading,setLoadingIndicator] = useState(false)

 useEffect (()=> {
   console.log('Rendering Ingredient',currentState);
 },[currentState])

 const filterIngredientHandler = useCallback((fileredIngredient)=>{
  console.log("setting in state....")
  setIngredientState(fileredIngredient)
  console.log('after setting state with Ingredient', currentState);
 }, [])

 const addIngredientHandler = ingredient =>{
  setLoadingIndicator(true)
   fetch('https://react-hook-backend.firebaseio.com/ingredients.json',{
     method: 'POST',
     body: JSON.stringify(ingredient),
     headers: {'Content-Type': 'application/json'}
   }).then((result)=>{
    setLoadingIndicator(false)
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
   const removeIngredientHandler =(ingredientId)=>{
    fetch(`https://react-hook-backend.firebaseio.com/ingredients/${ingredientId}.json`,{
      method: 'DELETE',
      }).then(response=>{
        console.log("after  delete")
        setIngredientState(prevIngredients =>{
          prevIngredients.filter(ingredients=> ingredients.name !== ingredientId)
        })
        console.log("after setting in the state", currentState)
      })
   }
  return (
    <div className="App">
      <IngredientForm addIngredient = {addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filterIngredientHandler}/>
        <IngredientList 
        myIngredients = {currentState}
        onRemoveItem = {removeIngredientHandler}/>
       
      </section>
    </div>
  );
}
//// onRemoveItem ={removeIngredientHandler}
export default Ingredients;
