import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddJob() {
  const [form, setForm] = useState({ company: '', position: '', status: 'pending' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/jobs', form);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 shadow rounded">
      <h2 className="text-xl font-bold">Add New Job</h2>
      <input name="company" onChange={handleChange} placeholder="Company Name" className="w-full p-2 border rounded" />
      <input name="position" onChange={handleChange} placeholder="Job Position" className="w-full p-2 border rounded" />
      <select name="status" onChange={handleChange} className="w-full p-2 border rounded">
        <option value="pending">Pending</option>
        <option value="interview">Interview</option>
        <option value="declined">Declined</option>
      </select>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Job</button>
    </form>
  );
}

export default AddJob;








