import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

import DrinkName from "./styled/DrinkName";

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 400px;
  margin-bottom: 2px;
`;

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    apiError: null,
  });

  const [errorMessage, setErrorMessage] = useState({
    username: null,
    password: null,
  });

  const [userFetched, setUserFetched] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    let haveError = false
    if (!user.username) {
      setErrorMessage((prevErrorMessage) => {
        return {
          ...prevErrorMessage,
          username: "Username must be provided",
        };
      })
      haveError = true
    }
    if(!user.password) {
        setErrorMessage((prevErrorMessage) => {
            return {
                ...prevErrorMessage,
                password: "Password field must not be empty"
            }
        })
        haveError = true
    }

    if (!haveError) {
        setErrorMessage({
            username: null,
            password: null,
            apiError: null
        })

        axios
        .post("/user/login", user)
        .then((res) => res.data)
        .then((json) => {
            console.log(json)
            setUserFetched(true)})
        .catch((err) => {
            setErrorMessage((prevErrMsg) => {
                return {
                    ...prevErrMsg,
                apiError: "Username/password combo not found in database"
            }
            })
        });
    }
  };

  const handleOnChange = (event) => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        [event.target.name]: event.target.value,
      };
    });
  };


  return (
    <>
    {userFetched ? (
        <DrinkName>Welcome {user.username}!</DrinkName>
    ) : (
    <div>
      <DrinkName>Admin Login</DrinkName>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <InputWrapper>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleOnChange}
          />
        </InputWrapper>
          {errorMessage.username}
        <InputWrapper>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleOnChange}
          />
        </InputWrapper>
          {errorMessage.password}
          {errorMessage.apiError}
        <div>
          <input type="submit" value="login" />
        </div>
      </form>
    </div>)}
    </>
  );
}

export default Login;
