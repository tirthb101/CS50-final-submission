import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: white;
    padding: 0px 20px;
`


export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
    margin: 0 auto;
    max-width: var(--maxWidth);
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 10px 20px;
    justify-content: space-between;
    margin: 10 px 10 px;
    width: 100%;
`;

export const Text = styled.div`
    margin: auto;
    text-align: center;
    width: 150px;
    font-size: var(--fontSmall)
`;