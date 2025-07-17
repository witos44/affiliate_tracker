import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('auth/me/')
      .then(res => setUser(res.data))
      .catch(() => navigate('/login'));
  }, [navigate]);

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return user ? (
    <div className="p-4">
      <h1 className="text-xl">Hi, {user.username}</h1>
      <button onClick={logout} className="mt-4 bg-red-500 text-white p-2">Logout</button>
    </div>
  ) : <p>Loading...</p>;
}

