import React, { useState, useEffect, useContext } from 'react';
import JoblyApi from './JoblyApi';
import Search from './Search';
import CardList from './CardList'
import UserContext from './UserContext';

function Jobs() {
    const [jobs, setJobs] = useState([])
    const { user } = useContext(UserContext);
    
    useEffect(() => {
        async function getJobs() {
            const res = await JoblyApi.getJobs();
            setJobs(res)
        }
        getJobs();
    }, [])

    async function handleSearch(search) {
        let gottenJobs = await JoblyApi.getJobs(search);
        setJobs(gottenJobs)
    }

    async function apply(idx) {
        let username = user.username;
        let jobId = jobs[idx].id;
        let res = await JoblyApi.applyToJob(username, jobId);
        setJobs(j => j.map(job => 
            job.id === jobId ? {...job, state: res} : job
            ))
        
    }
    
    
    return (
        <div>
            <Search searchType='jobs' handleSearch={handleSearch}/>
            <CardList cardType='job' cards={jobs} apply={apply} />
        </div>
    )
}

export default Jobs;