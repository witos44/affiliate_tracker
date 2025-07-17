// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact.jsx';
import SidebarLayout from './components/SidebarLayout';
import DashboardPage from './pages/DashboardPage';
import LinkPage from './pages/LinkPage';
import LinkForm from './pages/LinkForm';
import BannerGenerator from './pages/BannerGenerator.jsx';
import ProductList from './pages/ProductList.jsx';
import ProductDetail from './pages/ProductDetail.jsx';

const App = () => {
  return (
    <Router>
      {/* Layout utama */}
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow mt-20"> {/* mt-20 to prevent overlap from fixed navbar */}
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />

            {/* Protected routes with SidebarLayout */}
            <Route element={<SidebarLayout />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/links" element={<LinkPage />} />
              <Route path="/links/new" element={<LinkForm />} />
              <Route path="/links/:id/edit" element={<LinkForm />} />
              <Route path="/tools/banner-generator" element={<BannerGenerator />} />
            </Route>

            {/* Optional: redirect unknown routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;


