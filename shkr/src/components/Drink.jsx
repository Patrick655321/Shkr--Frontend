import React from 'react';
import DrinkName from './styled/DrinkName';
import ResultsContainer from './styled/DisplayedResults';
import DrinkInstructions from './styled/DrinkInstructions';

const Drink = ({ name, instr, image, ingredients}) => {
    return (
        <ResultsContainer>
            <img src={image} alt={name} style={{borderRadius: '180px', height:250 }} />
            <DrinkName>{name}</DrinkName>
            <ul>
                {ingredients.map(({name, measure }, index) => (
                    <li key={index}>{name}: {measure}</li>
                ))}
            </ul>
            <DrinkInstructions>{instr}</DrinkInstructions>
        </ResultsContainer>
    );
}

export default Drink