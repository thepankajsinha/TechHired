import React, { useEffect, useState } from 'react';
import { useFirebase } from '../context/Firebase';
import { Plus } from 'lucide-react';

const CreateJobForm = () => {

  const {createJob} = useFirebase();

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("Remote");
  const [postedOn, setPostedOn] = useState("");
  const [experience, setExperience] = useState("Fresher");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [skills, setSkills] = useState([]);
  const [jobLink, setJobLink] = useState("");
  const [skillInput, setSkillInput] = useState(""); // State for individual skill input

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createJob(
        title,
        company,
        location,
        postedOn,
        experience,
        type,
        salary,
        skills,
        jobLink
      );
  };

  const handleAddSkill = () => {
    if (skillInput.trim() !== "") {
      setSkills((prevSkills) => [...prevSkills, skillInput.trim()]);
      setSkillInput(""); // Clear input after adding skill
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills((prevSkills) => prevSkills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-semibold text-center mb-6">Create a Job Listing</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              placeholder="e.g. Junior Developer"
            />
          </div>




          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Company</label>
            <input
              type="text"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              placeholder="e.g. Amazon"
            />
          </div>



        <div>
            <label className="block text-sm font-medium text-gray-700">Experience</label>
            <select
              name="type"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            >
              <option value="Fresher">Fresher</option>
              <option value="1-2 Year">1-2 Year</option>
              <option value="2-3 Year">2-3 Year</option>
              <option value="3-4 Year">3-4 Year</option>
              <option value="4-5 Year">4-5 Year</option>
              <option value="5+ Year">5+ Year</option>
            </select>
          </div>



          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <select
              name="type"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            >
              <option value="Remote">Remote</option>
              <option value="In-Office">In-Office</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>




          {/* Job Link */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Link</label>
            <input
              type="url"
              name="jobLink"
              value={jobLink}
              onChange={(e) => setJobLink(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              placeholder="e.g. https://github.com/careers"
            />
          </div>




          {/* Posted On */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Posted On</label>
            <input
              type="date"
              name="postedOn"
              value={postedOn}
              onChange={(e) => setPostedOn(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>




          {/* Job Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Type</label>
            <select
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            >
              <option value="">Select Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          {/* Salary */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Salary in LPA</label>
            <input
              type="number"
              name="salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              placeholder="e.g. 10 LPA"
            />
          </div>
        </div>



        {/* Skills Section */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">Skills</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              placeholder="e.g. JavaScript"
            />
            <button type="button" onClick={handleAddSkill} className="bg-blue-700 text-white py-2 px-4 rounded inline-flex" >
              <Plus/> Add
            </button>
          </div>



          {/* Display Added Skills */}
          <div className="mt-2">
            {skills.length > 0 && (
              <ul className="list-disc pl-5">
                {skills.map((skill, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{skill}</span>
                    <button type="button" onClick={() => handleRemoveSkill(skill)} className="ml-2 text-red-700" >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>



        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button  type="submit" className="bg-black text-white py-2 px-6 rounded-lg">
            Create Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateJobForm;
