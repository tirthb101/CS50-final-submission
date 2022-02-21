// Import react
import React  from 'react';


// Global styles
import { GlobalStyle } from "./GlobalStyle";


// Router
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Header from './components/Header.index';

const App = () => (
  
  <Router>
    <Header />
    <Routes>
      <Route link='/' element={<Header />}/>
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;
