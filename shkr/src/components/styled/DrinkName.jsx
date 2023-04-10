import styled, { keyframes } from "styled-components";

const testing = keyframes`
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
`;

export default DrinkName;
