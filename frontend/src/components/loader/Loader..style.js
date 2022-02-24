import styled from 'styled-components';


export const SpinnerS = styled.div`
    width: 50px;
    height: 50px;
    margin: 30px auto;
    border: 5px solid var(--lightGrey);
    border-top: 6px solid var(--darkGrey);
    border-radius: 50%;
    animation: spin infinite linear 0.5s;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;