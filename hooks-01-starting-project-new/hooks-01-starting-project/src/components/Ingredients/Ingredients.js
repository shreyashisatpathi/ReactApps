import React,{useState} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList'

const Ingredients= () => {
  const [userIngredients,setUserIngredient] = useState([])

const addIngredientHandler = ingredient =>{
  setUserIngredient(prevIngrdient => [
    ...prevIngrdient,
    {id:Math.random().toString() ,...ingredient}
  ])
 }

return (
  <div className="App">
      <IngredientForm onAddIngredient ={addIngredientHandler}/>

      <section>
        <Search />
        <IngredientList ingredients = {userIngredients} onRemoveItem ={()=>{}}/>
      </section>
    </div>
  );
}

export default Ingredients;
