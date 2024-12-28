import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import { useEffect } from "react";
import { useFirebase } from "../context/Firebase";
import { Loader } from 'lucide-react';

function HomePage() {
  const { jobs, fetchJobs, loading, fetchJobsCustom } = useFirebase();

  useEffect(() => {
    fetchJobs();
    fetchJobsCustom();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-white text-3xl">
        <Loader className="animate-spin" 
         style={{
          width: "4rem", // Default size
          height: "4rem", 
        }}/>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <SearchBar />
      <div className="flex items-center justify-center mt-5"></div>
      {jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job.id} {...job} />)
      ) : (
        <p className="text-center h-screen text-white mt-10 text-3xl">No jobs available</p>
      )}
    </div>
  );
}

export default HomePage;
