// src/pages/LinksDashboard.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import LinkList from '../components/LinkList';

const LinksDashboard = () => {
  const [links, setLinks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/links/')
      .then(res => setLinks(res.data))
      .catch(err => console.error('Failed to load links:', err));
  }, []);

  const handleEdit = (id) => {
    console.log("Edit clicked with id:", id); // cek konsol
    navigate(`/links/${id}/edit`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/links/${id}/`);
      setLinks(prev => prev.filter(link => link.id !== id));
    } catch (err) {
      console.error('Failed to delete link:', err);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Affiliate Links</h1>
      <LinkList
        links={links}
        onEdit={(id) => navigate(`/links/${id}/edit`)}
        onDelete={(id) => {
    setLinks(prev => prev.filter(link => link.id !== id));
        }}
      />
    </div>
  );
};

export default LinksDashboard;
