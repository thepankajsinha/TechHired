import React, { useState } from 'react';
import { useFirebase } from '../context/Firebase';

function SearchBar() {
    const { jobs, fetchJobsCustom } = useFirebase();

    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [jobType, setJobType] = useState("");
    const [company, setCompany] = useState("");

    const search = async () => {
        const filters = { title, location, jobType, company };
        console.log(filters)
        fetchJobsCustom(filters);
    };

    return (
        <div className='flex flex-col md:flex-row flex-wrap gap-4 mt-10 justify-center px-4'>
            
            <select
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                value={title}
                className='w-full md:w-64 py-3 pl-4 bg-white font-semibold rounded-md'
            >
                <option value="" disabled hidden>Job Role</option>
                {jobs.map((job, index) => (
                    <option key={index} value={job.title}>{job.title}</option>
                ))}
            </select>


            <select
                onChange={(e) => setLocation(e.target.value)}
                name="location"
                value={location}
                className='w-full md:w-64 py-3 pl-4 bg-white font-semibold rounded-md'
            >
                <option value="" disabled hidden>Location</option>
                {jobs.map((job, index) => (
                    <option key={index} value={job.location}>{job.location}</option>
                ))}
            </select>


            <select
                onChange={(e) => setJobType(e.target.value)}
                name="jobType"
                value={jobType}
                className='w-full md:w-64 py-3 pl-4 bg-white font-semibold rounded-md'
            >
                <option value="" disabled hidden>JobType</option>
                <option value="Remote">Remote</option>
                <option value="In-Office">In-Office</option>
                <option value="Hybrid">Hybrid</option>
            </select>


            <select
                onChange={(e) => setCompany(e.target.value)}
                name="company"
                value={company}
                className='w-full md:w-64 py-3 pl-4 bg-white font-semibold rounded-md'
            >
                <option value="" disabled hidden>Company</option>
                {jobs.map((job, index) => (
                    <option key={index} value={job.company}>{job.company}</option>
                ))}
            </select>


            <button
                onClick={search}
                className='w-full md:w-60 bg-blue-600 text-white font-bold py-3 rounded-md'
            >
                Search
            </button>


            {/* Clear button */}
            <button
                onClick={() => {
                    setTitle("");
                    setJobType("");
                    setLocation("");
                    setCompany("");
                    fetchJobsCustom({}); // Fetch all jobs again after clearing the search filters
                }}
                className='w-full md:w-60 bg-black text-white font-bold py-3 rounded-md'
            >
                Clear
            </button>
        </div>
    );
}

export default SearchBar;
