import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import JobCard from '../components/JobCard'
import { useEffect, useState } from "react";
import { useFirebase } from '../context/Firebase';

function HomePage() {
  
    const {jobs, fetchJobs, loading,fetchJobsCustom} = useFirebase();
  
    useEffect(() => {
      fetchJobs();
      fetchJobsCustom();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
    
  return (
    <div>
        <Header/>
        <SearchBar/>
        <div className='flex items-center justify-center mt-5'>
        <button type="button" className = "  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Listed Jobs:  {jobs.length}</button>
        </div>
        
        {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
        ))}
    </div>
  )
}

export default HomePage