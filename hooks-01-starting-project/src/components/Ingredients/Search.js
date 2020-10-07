import React,{useState, useEffect} from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const {onLoadIngredients} = props;
  const [enterFilter,setEnteredState] = useState('');

  useEffect(() =>{
    const query = enterFilter.length === 0 ? '' : `?orderBy="title"&equalTo="${enterFilter}"`
    fetch('https://react-hook-backend.firebaseio.com/ingredients.json'+query).then(
      (response) => response.json()
    ).then((data) => {
      console.log("Response from api call", data)
      const loadIngredients = []
      for (const key in data){
        loadIngredients.push({
          name : key,
          amount: data[key].amount,
          title: data[key].title
        })
      }
      onLoadIngredients(loadIngredients)
    },[enterFilter,onLoadIngredients])
   })

  const onChangeHandler = (value)=>{
    console.log(value)
    setEnteredState(value)
  }

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input value={enterFilter} type="text" onChange={event =>onChangeHandler(event.target.value)} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
