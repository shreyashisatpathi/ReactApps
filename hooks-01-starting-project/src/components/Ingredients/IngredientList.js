import React from 'react';

import './IngredientList.css';

const IngredientList =( props ) => {
  console.log("nnnnnn========", props)
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients </h2>
      <ul>
        {props.myIngredients.map(ig => (
          <li key={ig.name} onClick={props.onRemoveItem.bind(this, ig.name)} > 
            <span>{ig.title}</span>
            <span>{ig.amount}x</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
// onClick ={props.onRemoveItem(this, ig.name)} 
//onClick={props.onRemoveItem.bind(this, ig.id)}
export default IngredientList;
