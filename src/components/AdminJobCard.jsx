import React from 'react';
import { useFirebase } from '../context/Firebase';
import { Trash2 } from 'lucide-react';

// Utility Functions
function getFormattedDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so add 1
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function calculateDaysBetweenDates(date1, date2) {
  if (!date1 || !date2) return 0; // Fallback for invalid dates
  const diffTime = Math.abs(new Date(date2) - new Date(date1)); // Difference in milliseconds
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
  return diffDays;
}

// AdminJobCard Component
function AdminJobCard({
  id,
  title = 'Unknown Job Title',
  company = 'Unknown Company',
  type = 'Unknown Type',
  experience = 'N/A',
  location = 'N/A',
  salary = 'N/A',
  skills = [],
  postedOn = getFormattedDate(),
}) {
  const { deleteJob,fetchJobs } = useFirebase(); // Firebase context

  const today = getFormattedDate();
  const duration = calculateDaysBetweenDates(today, postedOn);

  const handleDelete = () => {
    if (id) {
      deleteJob(id); 
    } else {
      console.error('No job ID found for deletion.');
    }
    fetchJobs(); // Fetch updated jobs after deletion
  };

  return (
    <div className="mx-auto mb-4 max-w-4xl">
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center px-6 py-4 mt-5 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-105 transition-transform">
      {/* Job Details */}
      <div className="flex flex-col items-start gap-3">
        <h1 className="text-lg font-semibold">
          {title} - {company}
        </h1>
        <p>
          {type} &#x2022; Exp: {experience} &#x2022; {location} &#x2022; {salary} LPA
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {skills.map((skill, index) => (
            <p
              key={index}
              className="text-white bg-black py-1 px-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
  
      {/* Action Section */}
      <div className="flex flex-col items-start lg:items-end gap-4 mt-4 lg:mt-0">
        <p>
          Posted{' '}
          {duration > 30
            ? `${Math.round(duration / 30)} months`
            : `${Math.round(duration)} days`}{' '}
          ago
        </p>
        <button
          className="bg-red-600 text-white py-2 px-6 rounded-lg cursor-pointer inline-flex items-center hover:bg-red-700 transition"
          onClick={handleDelete}
          aria-label={`Delete job posting for ${title}`}
        >
          Delete <Trash2 className="ml-2" />
        </button>
      </div>
    </div>
  </div>
  
  );
}

export default AdminJobCard;
