import React from 'react';
import { Link } from 'react-router-dom';

function CompanyCard({ info = {} }) {

    const { handle, name, description, logoUrl } = info;
    return (
        <div>
            <Link className='Card card' to={`/companies/${handle}`}>
                <div className='card-body'>
                    <h4 className='card-title d-flex justify-content-between'>
                        <span className='text-capitalize'>{name}</span>
                        <img src={logoUrl || '/img/logo-14.svg'} alt={`${name}'s logo`} />
                        
                    </h4>
                    <p>{description}</p>
                </div>           
            </Link>
        </div>
        
        
        
    )
}

export default CompanyCard;