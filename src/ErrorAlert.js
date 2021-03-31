import React from 'react';

function ErrorAlert({errors}) {
    return (
        <div className='alert alert-danger'>
            {errors.map(error => (
                <p key={error}>{error}</p>
            ))}
        </div>
    )
}

export default ErrorAlert;