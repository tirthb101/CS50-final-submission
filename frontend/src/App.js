// Import react
import React, { useContext }  from 'react';


// Global styles
import { GlobalStyle } from "./GlobalStyle";


// Router
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Userprovider from './context';

import Header from './components/Header/Header.index'
import Inventory from './components/Inventory/Inv.index';
import Login from './components/Login/Login.index';
import Register from './components/Register/Register.index';
import Transactions from './components/Transactions/Transacion.index';
import Add from './components/Add/Add.index'

import { Context } from './context';


const App = () => (
  
  <Router>
    <Userprovider>
    <Header />
    <Routes>
      <Route path='/' element={<Inventory />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/transactions' element={<Transactions />}/>
      <Route path='/add' element={<Add />}/>
      <Route path='/with' element={<Transactions />}/>
      <Route path='/return' element={<Transactions />}/>
      <Route path='/create_user' element={<Transactions />}/>
    </Routes>
    <GlobalStyle />
    </Userprovider>
  </Router>
);

export default App;
