import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-400 shadow z-50 px-6 py-4 flex justify-between items-center">
      <div className="text-5xl font-bold text-green-50">Zytra</div>
      <ul className="hidden md:flex gap-6 text-white">
        {[
          ['Home', '/Home'],
          ['Services', '/Services'],
          ['About', '/About'],
          ['Contact', '/Contact'],
          ['Product List', '/ProductList'],
        ].map(([label, path]) => (
          <Button key={label} className="shadow-xl text-lg" variant="outline" onClick={() => navigate(path)}>
            <li className="cursor-pointer hover:text-blue-600">{label}</li>
          </Button>
        ))}
      </ul>
      <Button className="shadow-xl text-lg" variant="outline" onClick={() => navigate('/login')}>
        Login / Register
      </Button>
    </nav>
  );
}
