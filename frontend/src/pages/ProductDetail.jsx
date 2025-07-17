import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/products/${id}/`)
      .then(res => {
        if (!res.ok) throw new Error('Product not found');
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading product:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!product) return <div className="p-10 text-center text-red-500">Product not found.</div>;

  return (
    <div className="min-h-screen bg-white py-20 px-6 max-w-4xl mx-auto">
      <button
        className="mb-6 text-blue-600 hover:underline"
        onClick={() => navigate(-1)}
      >
        ← Back to Product List
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-72 object-cover rounded-lg shadow"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="text-xl font-semibold text-blue-600 mb-4">${product.price}</div>
          <p className="text-sm text-gray-500">Merchant: {product.merchant}</p>
          <p className="text-sm text-gray-400 mt-1">Posted on: {new Date(product.created_at).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
