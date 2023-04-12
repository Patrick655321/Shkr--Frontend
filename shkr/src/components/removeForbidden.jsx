import { useState } from "react";
import styled from "styled-components";
import axios from "axios"

import DrinkName from "./styled/DrinkName";

const api = axios.create({
  baseURL: 'http://localhost:3010',
})

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 400px;
  margin-bottom: 2px;
`;

function RemoveForbidden() {
  const [unforbid, setUnforbid] = useState({
    drink: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    api.patch("/products/forbidden/remove", unforbid)
    .then((res) => res.data)
    .then((json) => console.log(json))
  };

  const handleOnChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setUnforbid({[e.target.name]: e.target.value})

  };

  return (
    <div id="removeForbidden">
      <DrinkName>Remove Forbidden</DrinkName>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <InputWrapper>
          <label htmlFor="title">Drink Name:</label>
          <input
            type="text"
            name="drink"
            value={unforbid.drink}
            onChange={handleOnChange}
          />
        </InputWrapper>
        <input type="submit" value="Remove Forbidden" />
      </form>
    </div>
  );
}

export default RemoveForbidden;
