import React, { useState, useEffect } from 'react';
import { useFirebase } from '../context/Firebase';

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
      <h1 className="text-3xl font-bold text-center mb-8">All Jobs</h1>

      {/* Show message if there are no jobs */}
      {jobs.length === 0 ? (
        <p className="text-center text-lg">No jobs available</p>
      ) : (
        <ul className="space-y-6">
          {jobs.map((job) => (
            <li key={job.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{job.title} - {job.company}</h3>
                <p className="text-gray-600">Location: {job.location}</p>
                <p className="text-gray-600">Experience: {job.experience}</p>
                <p className="text-gray-600">Salary: {job.salary}</p>
                <p className="text-gray-600">Posted on: {job.postedOn}</p>
                <a
                  href={job.jobLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Job
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllJobs;
