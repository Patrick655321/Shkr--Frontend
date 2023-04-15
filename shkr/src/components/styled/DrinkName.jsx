import styled, { keyframes } from "styled-components";

const colorChange = keyframes`
    from {color: IndianRed;
    }
    50% {
        color: Indigo;
    }
    to {color: IndianRed;
    }
    `;

const DrinkName = styled.h1`
  color: IndianRed;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-name: ${colorChange};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`

export default DrinkName;
