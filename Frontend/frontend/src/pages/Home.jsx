import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await axios.get('http://localhost:5000/jobs');
    setJobs(res.data);
  };

  const deleteJob = async (id) => {
    await axios.delete(`http://localhost:5000/jobs/${id}`);
    fetchJobs();
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Your Job Applications</h2>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job._id} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold">{job.position}</h3>
            <p className="text-gray-600">Company: {job.company}</p>
            <p className="text-sm text-gray-500">Status: {job.status}</p>
            <div className="mt-2 space-x-2">
              <Link to={`/edit/${job._id}`} className="text-blue-500">Edit</Link>
              <button onClick={() => deleteJob(job._id)} className="text-red-500">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
