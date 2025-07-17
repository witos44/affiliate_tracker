import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Ganti URL di bawah dengan endpoint API backend kamu
    fetch('/api/products/')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to load products:', err));
  }, []);

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <h1 className="text-3xl font-bold text-center mb-12">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map(product => (
          <div
            key={product.id}
            onClick={() => navigate(`/products/${product.id}`)}
            className="cursor-pointer border rounded-xl shadow hover:shadow-lg p-6 transition-all"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.description}</p>
            <div className="mt-4 font-bold text-blue-600">${product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
