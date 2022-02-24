import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../context";
import { base_url } from "../config";

const inttial_state = []


const useHomeFetch = () => {
    const [state, setState] = useState(inttial_state);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [_user, seUser] = useContext(Context)
    const navigate = useNavigate();

    const homepage =  async (base_url, lib_namess, token_) => {
        try {
            setError(false)
            setLoading(true)
            const bodyFormData = new FormData();
            bodyFormData.append('lib_name', lib_namess);
            bodyFormData.append('token', token_);
            const data = await axios({method:'post',url:base_url, data: bodyFormData})

            if (data.data.status === 'failed'){
                seUser(undefined)
                navigate('/login')
            }
            setState(data.data)
            setLoading(false)
        }
        catch {
            setError(true)
            setLoading(false)
        }
    }


    useEffect(() => {
        if (_user === undefined){
            navigate('/login');
        }else {
            homepage(base_url, _user.lib_name, _user.token)
        }
        
    },[])

    return{state, loading, error}
}

export default useHomeFetch;