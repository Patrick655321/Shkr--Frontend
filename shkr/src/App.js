// import Drink from './components/Drink'
import { DrinkList } from './components/DrinkList';
import Drink from './Drink';
import { useEffect, useState } from 'react';

function App() {

  const drinks = [        
    {id: 1,
    name: "Margarita",
    ingredient1: "Tequila",
    measure1: 45,
    ingredient2: "Triple Sec",
    measure2: 15,
    ingredient3: "Lime Juice",
    measure3: 30,
    garnish: "Salt rim",
    method:
        "Combine ingredients in a toby tin. Fill with ice, attach Boston and shake vigorously. Double strain into coupette.",
    image: "https://robohash.org/margarita",
},
{id: 2,
name: "Daiquiri",
ingredient1: "Rum",
measure1: 60,
ingredient2: "Lime Juice",
measure2: 30,
ingredient3: "Sugar",
measure3: 15,
garnish: "Naked",
method:
    "Combine ingredients in a toby tin. Fill with ice, attach Boston and shake vigorously. Double strain into coupette.",
image: "https://robohash.org/daiquiri",
},
{id: 3,
name: "Southside",
ingredient1: "gin",
measure1: 60,
ingredient2: "Lemon Juice",
measure2: 30,
ingredient3: "sugar",
measure3: 15,
ingredient4: "mint",
measure4: "pinch",
garnish: "Mint leaf",
method:
    "Combine ingredients in a toby tin. Fill with ice, attach Boston and shake vigorously. Double strain into coupette.",
image: "https://robohash.org/southside",
}]

const examplereq = "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

const getDrinks = async() => {
  const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
  const data = await res.json()
  setDranks(data.drinks)
  console.log(dranks)
}

const [dranks, setDranks] = useState([])

useEffect(() =>{
  getDrinks()
}, [])

  return (
    <div className="App">
      <form className="searchForm">
      <input className="searchBartype=text"/>
      < button className="searchbutton" type="submit" >
        Search
        </button>
      </form>
      <DrinkList/>
      {dranks.map(drank =>(
        <Drink 
        name={drank.strDrink}
        instr={drank.strInstructions}
        image={drank.strDrinkThumb}/>
      ))}
    </div>
  );
}

export default App;
