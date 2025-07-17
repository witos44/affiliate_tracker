// src/components/SidebarLayout.jsx
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaLink,
  FaBoxOpen,
  FaChartLine,
  FaTools,
  FaUsers,
  FaCog,
  FaUserCircle
} from 'react-icons/fa';

const menuItems = [
  { icon: <FaTachometerAlt />, label: 'Dashboard', path: '/dashboard' },
  { icon: <FaLink />, label: 'Links', path: '/links' },
  { icon: <FaBoxOpen />, label: 'Products', path: '/products' },
  { icon: <FaChartLine />, label: 'Analytics', path: '/analytics' },
  {
    icon: <FaTools />,
    label: 'Tools',
    path: '/tools',
    children: [
      { label: 'Banner Generator', path: '/tools/banner-generator' },
      // Tambahkan item tools lain di sini jika perlu
    ]
  },
  { icon: <FaUsers />, label: 'Teams', path: '/teams' },
  { icon: <FaCog />, label: 'Settings', path: '/settings' },
  { icon: <FaUserCircle />, label: 'Profile', path: '/profile' },
];

const SidebarLayout = () => {
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path || pathname.startsWith(path + '/');

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4 overflow-y-auto">
        <div className="text-2xl font-bold mb-6">Affiliate Manager</div>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <div key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center p-2 rounded hover:bg-gray-700 ${isActive(item.path) ? 'bg-gray-700' : ''}`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
              {item.children && isActive(item.path) && (
                <div className="ml-6 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className={`block text-sm p-1 rounded hover:bg-gray-700 ${
                        pathname === child.path ? 'bg-gray-700' : ''
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;
