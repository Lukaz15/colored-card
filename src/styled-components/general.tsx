import styled from "styled-components";

interface CardProps {
    backgroundColor?: string;
}


export const Card = styled.div<CardProps>`
    background-color: ${(props) => props.backgroundColor || '#00f'};
    border: 1px solid black;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 4px #000;
    margin: auto;
    margin-top: 7.5vh;
    width: 400px;
    height: 600px;

`;

export const Input = styled.input`
    margin-top: 2.5vh;
`