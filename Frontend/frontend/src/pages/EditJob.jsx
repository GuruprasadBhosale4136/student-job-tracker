import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ company: '', position: '', status: 'pending' });

  useEffect(() => {
    axios.get(`http://localhost:5000/jobs/${id}`).then((res) => setForm(res.data));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/jobs/${id}`, form);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 shadow rounded">
      <h2 className="text-xl font-bold">Edit Job</h2>
      <input name="company" value={form.company} onChange={handleChange} placeholder="Company Name" className="w-full p-2 border rounded" />
      <input name="position" value={form.position} onChange={handleChange} placeholder="Job Position" className="w-full p-2 border rounded" />
      <select name="status" value={form.status} onChange={handleChange} className="w-full p-2 border rounded">
        <option value="pending">Pending</option>
        <option value="interview">Interview</option>
        <option value="declined">Declined</option>
      </select>
      <button className="bg-green-600 text-white px-4 py-2 rounded">Update Job</button>
    </form>
  );
}

export default EditJob;
