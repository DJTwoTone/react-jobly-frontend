import React from 'react';

function JobCard({ info = {}, handleApply }) {
    const { title, salary, equity} = info;
    
    return (
        <div className='Card card'>
            <div className='card-body'>
                <h4 className='card-title d-flex justify-content-between'>
                    <span className='text-capitalize'>{title}</span>
                </h4>
                <p>Salary: {salary}</p>
                <p>Equity: {equity}</p>

                <button
                    className='btn btn-secondary float-right'
                    onClick={handleApply}
                    disabled={info.state}
                >
                    {info.state ? "APPLIED" : "APPLY"}
                </button>
            </div>
        </div>)
}

export default JobCard;
