import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';

function Home() {

    const { user } = useContext(UserContext)

    return (
        <div className='Home'>
            <div className='container text-center'>
                <h1 className='font-weight-bold'>
                    JOBLY
                </h1>
                <p className='lead'>
                    ALL THE JOBS YOU COULD EVER WANT!!!
                </p>
                {user ? (
                    <h3>
                        WELCOME BACK {user.firstName}
                    </h3>
                ) :(
                    <div>
                        <Link className='btn btn-primary mx-4' to='/login'>
                            LOGIN
                        </Link>
                        <Link className='btn btn-primary mx-4' to='/signup'>
                            SIGNUP
                        </Link>
                    </div>
                )}
            </div>
            




        </div>
    )
}

export default Home;