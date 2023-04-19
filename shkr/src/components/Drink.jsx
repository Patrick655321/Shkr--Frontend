import React from 'react';
import DrinkName from './styled/DrinkName';
import ResultsContainer from './styled/DisplayedResults';
import DrinkInstructions from './styled/DrinkInstructions';

import Review from './Review';

const Drink = ({ name, instr, image, ingredients}) => {
    return (
        <ResultsContainer>
            <img src={image} alt={name} style={{borderRadius: '180px', height:250, boxShadow: '2px 2px 30px rgba(33, 2, 71, 0.5)' }} />
            <DrinkName>{name}</DrinkName>
            <ul>
                {ingredients.map(({name, measure }, index) => (
                    <li key={index}>{name}: {measure}</li>
                ))}
            </ul>
            <DrinkInstructions>{instr}</DrinkInstructions>
            <Review />
        </ResultsContainer>
    );
}

export default Drink 