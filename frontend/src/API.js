const { default: axios } = require("axios")
const FormData = require('form-data');


// Base url
const base_url = 'http://192.168.0.105:105/'



// Valid values you can use anytime to troubleshoot the api execpt the TOKEN as it is is set to expire after certain time
// Tran types are WITH, RETURN AND ADD 
// User 0 refers to oprator of lib

const lib_namess = 'example22121122131231232133h'
const token_ = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsaWJfbmFtZSI6ImV4YW1wbGUyMjEyMTEyMjEzMTIzMTIzMjEzM2giLCJleHAiOjE2NDU0NzU5Mjd9.URTyS_DdYOoYht2q_aIhv2PF49O4jG78bX9VSK-Fg3M'
const lib_pass = '12312312fasFesff21323'
const f = 'abcd'
const m = 'edfg'
const l = 'ajwnd'
const item_id = 6
const quan = 1
const name = 'book154645123122322123123se'
const user = 7
const tran_type = 'RETURN'

export const homepage = async(lib_namess, token_) => {
    const formData = new FormData();
    formData.append('lib_name', lib_namess)
    formData.append('token', token_)

    const data =  await axios.post(`${base_url}`, formData, {
        headers: formData.getHeaders()
    }).then(Response => Response.data)

    return data
}

export const login = async(lib_namess, lib_pass) => {
    const formData = new FormData();
    formData.append('lib_name', lib_namess)
    formData.append('lib_pass', lib_pass)

    const data =  await axios.post(`${base_url}/login`, formData, {
        headers: formData.getHeaders()
    }).then(Response => Response.data)

    return data
}

export const register = async(lib_namess, lib_pass) => {
    const formData = new FormData();
    formData.append('lib_name', lib_namess)
    formData.append('lib_pass', lib_pass)

    const data =  await axios.post(`${base_url}/register`, formData, {
        headers: formData.getHeaders()
    }).then(Response => Response.data)

    return data
}

export const add_user = async(lib_namess, token_, f, m, l) => {
    const formData = new FormData();
    formData.append('lib_name', lib_namess)
    formData.append('token', token_)
    formData.append('first_name', f)
    formData.append('middle_name', m)
    formData.append('last_name', l)

    const data =  await axios.post(`${base_url}/create_profile`, formData, {
        headers: formData.getHeaders()
    }).then(Response => Response.data)

    return data
}

export const withdraw = async(lib_namess, token_, item_id, quan, name, user) => {
    const formData = new FormData();
    formData.append('lib_name', lib_namess)
    formData.append('token', token_)
    formData.append('item_id', item_id)
    formData.append('quan', quan)
    formData.append('name', name)
    formData.append('user', user)

    const data =  await axios.post(`${base_url}/withdraw`, formData, {
        headers: formData.getHeaders()
    }).then(Response => Response.data)

    return data
}


export const add_stock = async(lib_namess, token_, item_id, quan, name, user, tran_type) => {
    const formData = new FormData();
    formData.append('lib_name', lib_namess)
    formData.append('token', token_)
    
    formData.append('quan', quan)
    formData.append('name', name)
    formData.append('user', user)
    formData.append('tran_type', tran_type)

    if (item_id != null){
        formData.append('item_id', item_id)
    }

    const data =  await axios.post(`${base_url}/add_stock`, formData, {
        headers: formData.getHeaders()
    }).then(Response => Response.data)

    return data
}


export const transactions  = async(lib_namess, token_) => {
    const formData = new FormData();
    formData.append('lib_name', lib_namess)
    formData.append('token', token_)

    const data =  await axios.post(`${base_url}/transactions`, formData, {
        headers: formData.getHeaders()
    }).then(Response => Response.data)

    return data
}
