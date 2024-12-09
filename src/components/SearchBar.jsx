import React, { useState } from 'react';
import { useFirebase } from '../context/Firebase';

function SearchBar() {
    const { jobs, fetchJobsCustom } = useFirebase();

    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [location, setLocation] = useState("");
    const [company, setCompany] = useState("");

    const search = async () => {
        const filters = { title, type, location, company };
        fetchJobsCustom(filters);
    };

    return (
        <div className='flex flex-col md:flex-row flex-wrap gap-4 mt-10 justify-center px-4'>
            <select
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                value={title}
                className='w-full md:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'
            >
                <option value="" disabled hidden>Job Role</option>
                {jobs.map((job, index) => (
                    <option key={index} value={job.title}>{job.title}</option>
                ))}
            </select>

            <select
                onChange={(e) => setType(e.target.value)}
                name="type"
                value={type}
                className='w-full md:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'
            >
                <option value="" disabled hidden>Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Internship">Internship</option>
            </select>

            <select
                onChange={(e) => setLocation(e.target.value)}
                name="location"
                value={location}
                className='w-full md:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'
            >
                <option value="" disabled hidden>Location</option>
                <option value="Remote">Remote</option>
                <option value="In-Office">In-Office</option>
                <option value="Hybrid">Hybrid</option>
            </select>

            <select
                onChange={(e) => setCompany(e.target.value)}
                name="company"
                value={company}
                className='w-full md:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'
            >
                <option value="" disabled hidden>Company</option>
                {jobs.map((job, index) => (
                    <option key={index} value={job.company}>{job.company}</option>
                ))}
            </select>

            <button
                onClick={search}
                className='w-full md:w-60 bg-blue-500 text-white font-bold py-3 rounded-md'
            >
                Search
            </button>

            <button
                onClick={() => {
                    setTitle("");
                    setType("");
                    setLocation("");
                    setCompany("");
                    fetchJobsCustom({}); // Fetch all jobs again after clearing the search filters
                }}
                className='w-full md:w-60 bg-gray-500 text-white font-bold py-3 rounded-md'
            >
                Clear
            </button>
        </div>
    );
}

export default SearchBar;
