// src/pages/LinkPage.jsx
import { Link } from 'react-router-dom';
import LinkList from '../components/LinkList';


const LinkPage = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Affiliate Links</h1>
        <Link to="/links/new" className="bg-green-500 text-white px-4 py-2 rounded">
          + Create New
        </Link>
      </div>
      <LinkList />
    </div>
  );
};

export default LinkPage;
