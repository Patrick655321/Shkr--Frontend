import './App.css'

import NavBar from "./components/mui/NavBar";
import Button from "./components/styled/Button";
import Drink from './components/Drink';
import { useEffect, useState } from 'react';
// import AddForbidden from "./components/AddForbidden";
// import RemoveForbidden from './components/removeForbidden';
// import Login from './components/Login';

function App() {

const getDrinks = async() => {
  const res = await fetch(`http://localhost:3010/drinks/name/${query}`)
  const data = await res.json()
  setDranks(data.drinks)
}

const [dranks, setDranks] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('')

useEffect(() =>{
  getDrinks()
}, [query])

const updateSearch = event => {
  setSearch(event.target.value);
}

const getSearch = event => {
  event.preventDefault();
  setQuery(search)
  setSearch('')
}

  return (
    <div className="App">
      <NavBar />
      {/* <Login /> */}
      <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" style={{margin: '10px'}} value={search} onChange={updateSearch}/>
      <Button className="search-button" type="submit" >
        Search
        </Button>
      </form>
      <div className="drink-info">
      {dranks.map((drank) => {
        const ingredients = [];
        for (let i = 1; i <= 15; i++) {
          const ingredientName = drank[`strIngredient${i}`];
          const ingredientMeasure = drank[`strMeasure${i}`];
          if (ingredientName && ingredientMeasure) {
            ingredients.push({name: ingredientName, measure:ingredientMeasure});
          }
        }
        return(
        <Drink
        key={drank.strDrink}
        name={drank.strDrink}
        ingredients={ingredients}
        instr={drank.strInstructions}
        image={drank.strDrinkThumb}/>
)})}
        {/* <AddForbidden />
        <RemoveForbidden /> */}
      </div>
    </div>
  );
}

export default App;
