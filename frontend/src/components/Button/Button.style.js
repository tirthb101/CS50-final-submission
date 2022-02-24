import styled from "styled-components";



export const Wrapper = styled.button`
    display: block;
    background-color: var(--medGrey);
    width: 25%;
    min-width: 200px;
    height: 60px;
    border-radius: 25px;
    margin: 20px auto;
    color: var(--white);
    font-size: var(--fontBig);
    outline: none;
    cursor: pointer;
    transform: all 0.3s;
    :hover {
        opacity: 0.8;
    }
`;