// import Drink from './components/Drink'
import "./App.css"

import { DrinkList } from './components/DrinkList';
import Drink from './Drink';
import { useEffect, useState } from 'react';

function App() {

const getDrinks = async() => {
  const res = await fetch(`http://localhost:3010/drinks/name/${query}`)
  const data = await res.json()
  setDranks(data.drinks)
  console.log(dranks)
}

const [dranks, setDranks] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('martini')

useEffect(() =>{
  getDrinks()
}, [query])

const updateSearch = e => {
  setSearch(e.target.value);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search)
  setSearch('')
}

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
      < button className="searchbutton" type="submit" >
        Search
        </button>
      </form>
      <DrinkList/>
      {dranks.map(drank =>(
        <Drink
        key={drank.strDrink}
        name={drank.strDrink}
        instr={drank.strInstructions}
        image={drank.strDrinkThumb}/>
      ))}
    </div>
  );
}

export default App;
