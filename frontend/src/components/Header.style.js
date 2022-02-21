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
    max-width: var(--maxWidth);
`;

export const Logoimg = styled.img`
    width: 100px;
    @media screen and (max-width: 500px){
        width: 80px;
    }
`;

export const RMDBlogoimg = styled.img`
    width: 200px;
     @media screen and (max-width: 500px){
        width: 150px;
    }
`;