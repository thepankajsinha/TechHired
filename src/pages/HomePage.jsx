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
        {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
        ))}
    </div>
  )
}

export default HomePage