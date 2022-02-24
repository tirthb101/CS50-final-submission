import React, { useState, useContext} from "react";
import { useNavigate } from "react-router";
import axios from "axios";


import Button from '../Button/Button.index'

import { Wrapper } from "./Login.style";

import { Context } from "../../context";

import { base_url } from "../../config";

const Login = () => {

    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('');
    const [ error, setError] = useState(false);
    const [ _user, setUser] = useContext(Context);
    const navigate = useNavigate();

    const handlechnage = (event) => {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;

        if (name === 'username'){
            setUsername(value);
        }
        else if ( name === 'password') {
            setPassword(value);
        }
    }

    const handlesubmit = async (event) =>{
        setError(false);
        try {
            const bodyFormData = new FormData();
            bodyFormData.append('lib_name', username);
            bodyFormData.append('lib_pass', password);
            const data = await axios({method:'post',url:`${base_url}/login`, data: bodyFormData})

            if (data.data.code === 200) {
                setUser({lib_name: username, token : data.data.data});
                navigate('/')
            }
        }
        catch {
            setError(true);
        }

    }

    return(
        <Wrapper>
            {error ? <div className="error">There was an error</div> : null}
            <h2 id="black">Login:</h2>
            <label for="Username">Username:</label>
            <input 
                type="text"
                value={username}
                onChange={handlechnage}
                name="username"
                id="Username"
            />
            <label for="password">Password:</label>
            <input 
                type="password"
                value={password}
                onChange={handlechnage}
                name="password"
                id="password"
            />
            <Button text="Submit" callback={handlesubmit} />
        </Wrapper>
    )
}

export default Login;