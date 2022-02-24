import styled from "styled-components";


export const Wrapper = styled.div`
    background-color: black;
    padding: 0px 20px;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    margin: 0 auto;
    width: 80%;


    @media screen and (max-Width: 1000px){
        flex-direction: column;
    }
`;

export const Side = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 65%;
    @media screen and (max-Width: 1000px){
        flex-direction: column;
    }
`;