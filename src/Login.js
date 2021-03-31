import React, { useState } from 'react';
import { useHistory} from 'react-router-dom';
import JoblyApi from './JoblyApi';
import ErrorAlert from './ErrorAlert'


function Login({ setToken }) {
    
    const history = useHistory();

    const [loginForm, setLoginForm] = useState({
        username: "",
        password: "",
        errors: []
    })

    function handleChange(evt) {
        const { name, value } = evt.target;
        setLoginForm(info => ({
            ...info,
            [name]: value
        }))
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        let data = {
            username: loginForm.username,
            password: loginForm.password
        }

        try {
            
            let token = await JoblyApi.login(data);
            setToken(token);
            history.push('/');

        } catch (err) {
            return setLoginForm(info => ({
                ...info,
                errors: err

            }))
        }
    }
    
    
    return (

        <div className='Login'>
            <div className='container'>
                <div className='card'>
                    <div className='card-body'>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label>USERNAME</label>
                                <input 
                                    name='username'
                                    className='form-control'
                                    value={loginForm.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label>PASSWORD</label>
                                <input
                                    type='password' 
                                    name='password'
                                    className='form-control'
                                    value={loginForm.password}
                                    onChange={handleChange}
                                />
                            </div>
                            {loginForm.errors.length ? (
                                <ErrorAlert errors={loginForm.errors}/>
                            ) : null}

                            <button
                                type='submit'
                                className='btn btn-primary'
                                onSubmit={handleSubmit}
                            >
                                LOGIN
                            </button>
                        </form>

                    </div>

                </div>

            </div>

        </div>






    )
}

export default Login;