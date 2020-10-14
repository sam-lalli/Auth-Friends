import React, { useState } from 'react'
import axios from 'axios'


const Login = () => {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleChanges = e => {
        setCredentials({
            ...credentials, [e.target.name]: e.target.value
        })
    }

    const login = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/login', credentials)
            .then((res)=> {
                console.log(res)
                window.localStorage.setItem('token', res.data.payload);
                //this.history.push('/protected')
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <form onSubmit={login}>
                <label>Username: </label>
                <input 
                    type='text'
                    name='username'
                    value={credentials.username}
                    onChange={handleChanges}
                />
                <label>Password: </label>
                <input 
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChanges}
                />
                <button>Log in</button>
            </form>
        </div>
    )

}

export default Login