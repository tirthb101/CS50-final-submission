import React, { useState, useContext} from "react";
import { useNavigate } from "react-router";
import axios from "axios";


import Button from '../Button/Button.index'

import { Wrapper } from "./New.style";

import { Context } from "../../context";

import { base_url } from "../../config";

const New = () => {

    const [ first, setFirst] = useState('');
    const [ middle, setMiddle] = useState('');
    const [ last, setLast] = useState('');
    const [ error, setError] = useState(false);
    const [ _user, setUser] = useContext(Context);
    const navigate = useNavigate();

    const handlechnage = (event) => {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;

        if (name === 'first'){
            setFirst(value);
        }
        else if ( name === 'middle') {
            setMiddle(value);
        }
        else if ( name === 'last') {
            setLast(value);
        }
    }

    const handlesubmit = async (event) =>{
        setError(false);
        try {
            const bodyFormData = new FormData();
            bodyFormData.append('first_name', first);
            bodyFormData.append('middle_name', middle);
            bodyFormData.append('last_name', last);
            bodyFormData.append('lib_name', _user.lib_name);
            bodyFormData.append('token', _user.token);
            const data = await axios({method:'post',url:`${base_url}/add_stock`, data: bodyFormData})
            navigate('/')
            
        }
        catch {
            setError(true);
        }

    }

    return(
        <Wrapper>
            {error ? <div className="error">There was an error</div> : null}
            <h2 id="black">Add new stock:</h2>
            <label for="first">Firs name:</label>
            <input 
                type="text"
                value={first}
                onChange={handlechnage}
                name="first"
                id="first"
            />
            <label for="middle">Middle name:</label>
            <input 
                type="password"
                value={middle}
                onChange={handlechnage}
                name="middle"
                id="middle"
            />
            <label for="last">Last name:</label>
            <input 
                type="text"
                value={last}
                onChange={handlechnage}
                name="last"
                id="last"
            />
            <Button text="Submit" callback={handlesubmit} />
        </Wrapper>
    )
}

export default New;