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
    animation-name: ${testing};
    animation-duration: 4s;
    text-shadow: 2px 2px 4px #000000;
    animation-iteration-count: infinite;
    `;



export default DrinkName;