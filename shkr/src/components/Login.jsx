import styled from "styled-components";

import DrinkName from "./styled/DrinkName";

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 400px;
  margin-bottom: 2px;
`;

function Login() {
    return (
        <div>
            <DrinkName>Admin Login</DrinkName>
        </div>
    )
}

export default Login