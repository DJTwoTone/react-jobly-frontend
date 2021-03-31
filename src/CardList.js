import React from 'react';
import CompanyCard from './CompanyCard';
import JobCard from './JobCard';

function CardList({cardType, cards = [], apply = () => null}) {
           
    
    if (!cards.length) {
        return (
        <div>
            <p>Sorry, no results where found</p>
        </div>)
    }

    return (cardType === 'company') ? (
        <div>

            {cards.map((card, idx) => (
                <CompanyCard 
                    info={card}
                    key={idx}
                    idx={idx}

                />
            ))}
        </div>
    ) : (

        <div>

            {cards.map((card, idx) => (
                <JobCard 
                    info={card}
                    key={idx}
                    idx={idx}
                    handleApply={() => apply(idx)}
                />
            ))}

        </div>
    )
}

export default CardList;