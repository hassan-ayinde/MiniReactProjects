import React, { useState, useEffect } from "react";
import { LiaCcAmazonPay } from "react-icons/lia";
import axios from "axios";

const JobListing = ({searchQuery, location}) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://remoteok.com/api`)
      .then((res) => {
        // Ensure data contains jobs (skip the first entry if it's metadata)
        const jobData = Array.isArray(res.data) ? res.data.slice(1) : [];
        setJobs(jobData);
        setLoading(false);
        console.log(jobData)
      })
      .catch((err) => {
        setError("Failed to fetch jobs. Please try again later.");
        setLoading(false);
      });
  }, []);


  function timeAgo(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const diffInSeconds = Math.floor((now - date) / 1000);
  
    if (diffInSeconds < 60) {
      return `${diffInSeconds} secs ago`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 2592000) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 31536000) {
      const months = Math.floor(diffInSeconds / 2592000);
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else {
      const years = Math.floor(diffInSeconds / 31536000);
      return `${years} year${years > 1 ? "s" : ""} ago`;
    }
  }
  
  
   // Filter jobs based on searchQuery and location
   const filteredJobs = jobs.filter((job) => {
    const matchesQuery = job.position
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesLocation =
      location === "" || job.location?.toLowerCase() === location.toLowerCase();

    return matchesQuery && matchesLocation;
  });

  return (
    <div className="w-[90%] max-w-lg  sm:w-[90%] sm:max-w-3xl mx-auto bg-gray-200 p-4 rounded-2xl mt-5 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Search Results</h2>
        <p>
          <span className="font-semibold">{filteredJobs.length}</span> Results found
        </p>
      </div>

      {loading && <p className="text-center text-gray-500">Loading jobs...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && filteredJobs.length === 0 && (
        <p className="text-center text-gray-500">No jobs found.</p>
      )}

      <div className="sm:grid grid-cols-2 gap-3">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="p-3 border rounded-lg bg-white shadow-sm hover:shadow-md"
          >
            <div className="flex items-center space-x-3">
              <div>
                <img
                  src={job.company_logo}
                  alt={job.company}
                  className="w-11 h-11 object-cover rounded-lg border border-gray-200 border-solid p-1 bg-gray-primary"
                />
              </div>
              <div>
                <h5 className="font-semibold text-sm">{job.position}</h5>
                <p className="text-sm text-gray-600">{job.company}</p>
              </div>
            </div>
            <ul className="flex flex-wrap gap-3 mt-2">
            {
              job.tags.slice(0, 3).map((tag) => (
                <li key={tag} className="bg-gray-200 text-gray-600 text-sm px-2 py-1 rounded-lg mr-2">{tag}</li>
              ))
            }
            </ul>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center space-x-2">
                <LiaCcAmazonPay />
                <p>${String(job.salary_min).slice(0, 2)}k/month</p>
              </div>
              <div>
                <p>{timeAgo(job.date)}</p>
              </div>
            </div>
            {/* <p className="text-sm text-gray-500">{job.location || "Remote"}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListing;
