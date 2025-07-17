// src/components/LinkList.jsx
import { useEffect, useState } from 'react';
import { getLinks, deleteLink } from '../api/links';

const LinkList = ({ links: propsLinks = null, onEdit = () => {}, onDelete = () => {} }) => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  const useLocalLinks = propsLinks === null;

  useEffect(() => {
    if (useLocalLinks) {
      fetchLinks();
    } else {
      setLinks(propsLinks);
    }
  }, [propsLinks]);

  const fetchLinks = async () => {
    try {
      setLoading(true);
      const res = await getLinks();
      setLinks(res.data);
    } catch (error) {
      console.error('Error fetching links:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteLink(id);
      if (useLocalLinks) {
        setLinks(links.filter(link => link.id !== id));
      }
      onDelete(id); // always call parent delete if available
    } catch (error) {
      console.error('Error deleting link:', error);
    }
  };

  if (loading) return <p className="p-4 text-gray-600">Loading links...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Affiliate Links</h2>

      {links.length === 0 ? (
        <p className="text-gray-500">No links available.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Original URL</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {links.map((link) => (
              <tr key={link.id}>
                <td className="p-2 border">{link.name}</td>
                <td className="p-2 border">{link.original_url}</td>
                <td className="p-2 border space-x-2">
                  <button
                    onClick={() => onEdit(link.id)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(link.id)}
                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LinkList;
