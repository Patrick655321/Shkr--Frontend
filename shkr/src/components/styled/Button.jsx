import styled, { keyframes } from "styled-components";

const ButtonHover = keyframes`
    from {background-color: #751fed;
    }
    50% {background-color: #965ee4;
    }
    to {background-color: #751fed;}
`;

const Button = styled.button`
height: 40px;
width: 100px;
background-color: #751fed;
padding: 10px, 20px;
color: white;
border-radius: 30px;
:hover{
    animation-name: ${ButtonHover};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    cursor: pointer;
}
`

export default Button
  