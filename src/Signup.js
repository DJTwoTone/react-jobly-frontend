import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import JoblyApi from './JoblyApi';
import ErrorAlert from './ErrorAlert';


function Signup({ setToken }) {

    const history = useHistory();

    const [signupForm, setSignupForm] = useState({
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email: '',
        errors: []
    });

    function handleChange(evt) {
        const { name, value} = evt.target;
        setSignupForm(info => ({
            ...info,
            [name]: value
        }))
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        let data = {
            username: signupForm.username,
            password: signupForm.password,
            firstName: signupForm.first_name,
            lastName: signupForm.last_name,
            email: signupForm.email
        }

        try {

            let token = await JoblyApi.signup(data);
            setToken(token)
            history.push('/')

            
        } catch (err) {
            return setSignupForm(info => ({
                ...info,
                errors: err
            }))
        }
    }





    return (

        <div className='Signup'>
            <div className='container'>
                <div className='card'>
                    <div className='card-body'>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label>USERNAME</label>
                                <input 
                                    name='username'
                                    className='form-control'
                                    value={signupForm.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label>PASSWORD</label>
                                <input 
                                    type='password'
                                    name='password'
                                    className='form-control'
                                    value={signupForm.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label>FIRST NAME</label>
                                <input 
                                    name='first_name'
                                    className='form-control'
                                    value={signupForm.first_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label>LAST NAME</label>
                                <input 
                                    name='last_name'
                                    className='form-control'
                                    value={signupForm.last_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label>EMAIL ADDRESS</label>
                                <input 
                                    name='email'
                                    className='form-control'
                                    value={signupForm.email}
                                    onChange={handleChange}
                                />
                            </div>
                            {signupForm.errors.length ? (
                                <ErrorAlert errors={signupForm.errors} />
                            ) : null}

                            <button
                                type='submit'
                                className='btn btn-primary'
                                onSubmit={handleSubmit}
                            >
                                SIGNUP
                            </button>

                        </form>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Signup;