import styled from "styled-components"

import DrinkName from "./styled/DrinkName"

const InputWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 400px;
    margin-bottom: 2px;
`

function AddForbidden() {
    return(
        <div id="addForbidden" >
        <DrinkName>Add Forbidden</DrinkName>
        <form style={{display: 'flex',
    flexDirection: 'column',
    alignItems:'center'}}>
            <InputWrapper>
                <label htmlFor="title">Drink Name:</label>
                <input type="text" name="drinkName"/>
            </InputWrapper>
            <InputWrapper>
            <label htmlFor="id">Drink ID:</label>
            <input type="text" name="id" />
            </InputWrapper>
        </form>
        </div>
    )
}

export default AddForbidden