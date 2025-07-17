// src/pages/LinkForm.jsx
import { useState, useEffect } from 'react';
import axios from '../api/axios';
import { useNavigate, useParams } from 'react-router-dom';


const LinkForm = () => {
  const { id } = useParams(); // If editing, `id` will be available
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    original_url: '',
    short_code: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    product: '',
  });

  useEffect(() => {
    if (id) {
      axios.get(`/links/${id}/`).then(res => setForm(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === 'product' ? parseInt(value) || '' : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`/links/${id}/`, form);
      } else {
        await axios.post('/links/', form);
      }
      navigate('/links');
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data) {
        alert('Error: ' + JSON.stringify(err.response.data));
    } else {
      alert('Error submitting form');
  }
}
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">{id ? 'Edit' : 'Create'} Affiliate Link</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          ['name', 'Name'],
          ['original_url', 'Original URL'],
          ['short_code', 'Short Code'],
          ['utm_source', 'UTM Source'],
          ['utm_medium', 'UTM Medium'],
          ['utm_campaign', 'UTM Campaign'],
          ['product', 'Product ID (optional)'],
        ].map(([key, label]) => (
          <div key={key}>
            <label className="block text-sm font-medium">{label}</label>
            <input
              type="text"
              name={key}
              value={form[key] || ''}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required={['name', 'original_url', 'short_code'].includes(key)}
            />
          </div>
        ))}
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
          {id ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default LinkForm;
