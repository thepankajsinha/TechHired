import React, { useEffect } from 'react';
import { useFirebase } from '../context/Firebase';
import AdminJobCard from './AdminJobCard';

const AllJobs = () => {
	const {jobs, fetchJobs, loading} = useFirebase();
  
    useEffect(() => {
      fetchJobs();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl text-white font-bold text-center mb-8">All Available Jobs</h1>
        {jobs.map((job) => (
            <AdminJobCard key={job.id} {...job} />
        ))}
    </div>
  );
};

export default AllJobs;
