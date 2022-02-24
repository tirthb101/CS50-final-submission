import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px; 
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535; 
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
    --fontMidBig: 2rem;
  }
  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;  
  }
  body {  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    h1 {
      font-size: var(--fontMidBig);
      font-weight: 600;
      color: var(--white);
    }

    #black {
      color: black;
      font-size: var(--fontBig);
    }
    h3 {
      font-size: var(--fontBig);
      font-weight: 600;
      color: var(--white);
    }
    h2 {
      color: var(--white);
    }
    p {
      font-size: 1rem;
      color: var(--white);
    }

    #font-big {
      font-size: var(--fontBig);
    }

    hr {
    border: 1px solid gray;
    width: 100%;
    }

    @media screen and (max-Width: 1000px){
        h1 {
            margin: 5px auto;
        }
    }

    @media screen and (max-Width: 1500px){
      h1 {
        font-size: var(--fontMed)
      }
    }

    @media screen and (max-Width: 1000px){
      h1 {
        font-size: var(--fontSmall)
      }
    }



  }
`;