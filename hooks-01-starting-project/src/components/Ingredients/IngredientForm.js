import React, { useState} from 'react';
import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
 const [enteredTittle,setEnteredTittle] = useState('');
 const [newAmount,setEnteredAmount] = useState('')
 
  const submitHandler = event => {
    event.preventDefault();
      props.addIngredient({title : enteredTittle ,amount :newAmount});
    
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value = {enteredTittle}  
            onChange={event =>{
              setEnteredTittle(event.target.value)
            }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value = {newAmount}
            onChange ={event =>{
              setEnteredAmount(event.target.value)
            }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
