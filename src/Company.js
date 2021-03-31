import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from './JoblyApi';

function Company() {

    const { handle } = useParams();

    const [company, setCompany] = useState(null);

    useEffect(() => {

        async function getCompany() {
            const gottenCompany = await JoblyApi.getCompany(handle);
            setCompany(gottenCompany);
        }

        getCompany();
            
    }, [handle])

    if (!company) {
        return <div>WORKING!!!!</div>
    }    

    return (
        <div>
            <span className='d-flex justify-content-between'>
            <h4 className='text-capitalize'>{company.name}</h4>
            <img src={company.logoUrl || null} alt={`${company.name}'s logo`} />
            </span>
            <p>Number of Employees: {company.numEmployees}</p>
            <p>{company.description}</p>
        </div>
    )
}

export default Company;