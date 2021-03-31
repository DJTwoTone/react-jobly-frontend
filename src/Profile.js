import React, { useContext, useState } from 'react';
import JoblyApi from './JoblyApi';
import UserContext from './UserContext';
import ErrorAlert from './ErrorAlert';




function Profile() {
    
    const { user, setUser } = useContext(UserContext);

    const [form, setForm] = useState({
        first_name: user.firstName || '',
        last_name: user.lastName || '',
        email: user.email || '',
        password: '',
        errors: [],
        confirmSave: false
    })
    
    function handleChange(evt) {
        const { name, value } = evt.target;
        setForm(f => ({
            ...f,
            [name]: value
        }))
    }

    async function handleSubmit(evt) {
        evt.preventDefault();

        try {
            let username = user.username;

            let profile = {
                firstName: form.first_name || undefined,
                lastName: form.last_name || undefined,
                email: form.email || undefined,
                password: form.password
            };

            let update = await JoblyApi.updateUser(username, profile)

            setForm(f => ({
                ...f,
                password: '',
                errors: [],
                confirmSave: true
            }));

            setUser(update);
            
        } catch (errors) {
            setForm(f => ({
                ...f,
                errors
            }))
        }
    }
    
    
    
    
    return (
        <div className='Profile'>
            <h2>Profile</h2>
            <div className='card'>
                <div className='card-body'>
                    <form>
                        <div className='form-group'>
                            <label>USERNAME:</label>
                            <p className='form=control-plaintext'>{user.username}</p>
                        </div>
                        <div className='form-group'>
                            <label>FIRST NAME:</label>
                            <input
                                name='first_name'
                                className='form-control'
                                type='text'
                                value={form.first_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label>LAST NAME:</label>
                            <input
                                name='last_name'
                                className='form-control'
                                type='text'
                                value={form.last_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label>EMAIL ADDRESS:</label>
                            <input
                                name='email'
                                className='form-control'
                                type='text'
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label>ENTER YOUR PASSWORD, PLEASE.</label>
                            <input 
                                name='password'
                                className='form-control'
                                type='password'
                                value={form.password}
                                onChange={handleChange}
                            />
                        </div>

                        {form.errors.length ? (
                            <ErrorAlert messages={form.errors}/>
                        ) : null}

                        {form.confirmSave ? (
                            <p>PROFILE SAVED</p>
                        ) : null}

                        <button className='btn btn-primary' onClick={handleSubmit}>
                            SAVE CHANGES
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile;