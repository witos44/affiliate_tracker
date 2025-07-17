import { useState } from 'react';
import { getLinkPreview } from 'link-preview-js';
import LinkPreviewCard from '../components/LinkPreviewCard';

const ProductForm = () => {
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [previewData, setPreviewData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetchPreview = async () => {
    if (!url) return;
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8000/api/products/link-preview/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
        setPreviewData(data);
      } catch (error) {
        console.error('Preview error:', error);
        setPreviewData(null);
      } finally {
        setLoading(false);
      }
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Kirim ke backend
    alert('Produk disimpan!');
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Product URL:</label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
          <button
            type="button"
            onClick={handleFetchPreview}
            className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {loading ? 'Loading...' : 'Generate Preview'}
          </button>
        </div>

        {previewData && <LinkPreviewCard data={previewData} />}

        <div>
          <label className="block font-medium">Your Description:</label>
          <textarea
            rows={3}
            className="w-full border rounded p-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add some notes or description..."
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
