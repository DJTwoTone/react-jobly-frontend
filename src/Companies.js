import React, { useState, useEffect } from 'react';
import JoblyApi from './JoblyApi';
import Search from './Search';
import CardList from './CardList';

function Companies() {

        const [companies, setCompanies] = useState([])

        useEffect(() => {
            async function getCompanies() {
              const res = await JoblyApi.getCompanies();
              
              setCompanies(res)
        
            }
            getCompanies();
        
          },[])

          async function handleSearch(search) {
              let gottenCompanies = await JoblyApi.getCompanies(search);
              setCompanies(gottenCompanies)
          }


    return (
        <div>
            <Search searchType='companies' handleSearch={handleSearch} />
            <CardList cardType='company' cards={companies} />
        </div>
    )
}

export default Companies;