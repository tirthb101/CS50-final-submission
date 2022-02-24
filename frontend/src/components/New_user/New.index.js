import React, { useState, useContext} from "react";
import { useNavigate } from "react-router";
import axios from "axios";


import Button from '../Button/Button.index'

import { Wrapper } from "./New.style";

import { Context } from "../../context";

import { base_url } from "../../config";

const New = () => {
    const [ itemname, setitemname] = useState('');
    const [ quantity, setquaniy] = useState('');
    const [ error, setError] = useState(false);
    const [ _user, setUser] = useContext(Context);
    const navigate = useNavigate();

    const handlechnage = (event) => {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;

        if ( name === 'itemname') {
            setitemname(value);
        }
         else if ( name === 'quantity') {
            setquaniy(value);
        }
    }

    const handlesubmit = async (event) =>{
        setError(false);
        try {
            const bodyFormData = new FormData();
            bodyFormData.append('lib_name', _user.lib_name);
            bodyFormData.append('token', _user.token);
            bodyFormData.append('name', itemname);
            bodyFormData.append('quan', quantity);
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
            <label for="itemname">Item name:</label>
            <input 
                type="text"
                value={itemname}
                onChange={handlechnage}
                name="itemname"
                id="itemname"
            />
            <label for="quantity">Quanity:</label>
            <input 
                type="number"
                value={quantity}
                onChange={handlechnage}
                name="quantity"
                id="quantity"
            />
            <Button text="Submit" callback={handlesubmit} />
        </Wrapper>
    )
}

export default New;