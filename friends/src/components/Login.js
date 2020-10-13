import React from 'react'
import axios from 'axios'


const Login = () => {
    return(
        <div>
            <form>
                <label>Username: </label>
                <input 
                    type='text'
                    name='username'
                    //value
                    //onchange
                />
                <label>Password: </label>
                <input 
                    type='password'
                    name='password'
                    //value
                    //onchange
                />
                <button>Log in</button>
            </form>
        </div>
    )

}

export default Login