import React from 'react';

const Drink = ({name, instr, image}) => {
    return(
        <div>
        <img src={image} alt={name} style={{height:250}}/>
        <h1>{name}</h1>
        <p>ingredients</p>
        <p>{instr}</p>
        </div>
    );
}

export default Drink