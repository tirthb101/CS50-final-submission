// Import react
import React from 'react';


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
import Add from './components/Add_User/Add.index'
import New from './components/New_user/New.index';
import With from './components/With/With.index';
import Return from './components/Return/Return.index';






const App = () => (
  
  <Router>
    <Userprovider>
    <Header />
    <Routes>
      <Route path='/' element={<Inventory />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/transactions' element={<Transactions />}/>
      <Route path='/add' element={<New />}/>
      <Route path='/with' element={<With />}/>
      <Route path='/return' element={<Return />}/>
      <Route path='/create_user' element={<Add />}/>
    </Routes>
    <GlobalStyle />
    </Userprovider>
  </Router>
);

export default App;
