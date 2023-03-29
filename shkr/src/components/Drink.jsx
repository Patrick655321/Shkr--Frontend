import React from 'react';

const Drink = ({ name, instr, image, ingredients}) => {
    return (
        <div>
            <img src={image} alt={name} style={{borderRadius: '180px', height:250 }} />
            <h1>{name}</h1>
            <ul>
                {ingredients.map(({name, measure }, index) => (
                    <li key={index}>{name}: {measure}</li>
                ))}
            </ul>
            <p>{instr}</p>
        </div>
    );
}

export default Drink