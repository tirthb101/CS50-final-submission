import React, { useContext} from 'react';

import { Link} from 'react-router-dom';
import { Wrapper, Content, Side } from './Header.style';
import { Context } from '../../context';



const Header = () => {
    const [_user, setUser] = useContext(Context);
    
        return(<Wrapper>
            <Content>
                <Side>
                    <Link to="/">
                        <h1>LMS</h1>
                    </Link>
                    <Link to="/transactions">
                        <h1>Transactions</h1>
                    </Link>
                    <Link to="/add">
                        <h1>Add</h1>
                    </Link>
                    <Link to="/with">
                        <h1>Withdraw</h1>
                    </Link>
                    <Link to="/return">
                        <h1>Return</h1>
                    </Link>
                    <Link to="/create_user">
                        <h1>New Profile</h1>
                    </Link>
                </Side>
                {_user === undefined ? (<side_Content>
                <Link to="/login">
                    <h1>Login</h1>
                </Link>
                <Link to="/register">
                    <h1>Register</h1>
                </Link>
                </side_Content>):
                 (<Link to='/'><h2>LOGGED IN:</h2> 
                   <h3>{_user.lib_name}</h3></Link>)}
            </Content>
        </Wrapper>)
};
export default Header;