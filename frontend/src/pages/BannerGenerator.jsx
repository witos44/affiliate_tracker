import { useState } from "react";

const BannerGenerator = () => {
  const [title, setTitle] = useState("Your Product Title");
  const [cta, setCta] = useState("Buy Now");
  const [color, setColor] = useState("#1D4ED8");
  const [image, setImage] = useState("https://via.placeholder.com/150");
  const [link, setLink] = useState("https://example.com");

  const htmlCode = `
<a href="${link}" target="_blank" style="text-decoration: none;">
  <div style="display: flex; align-items: center; border: 1px solid #ccc; border-radius: 8px; overflow: hidden;">
    <img src="${image}" alt="Banner" style="width: 150px; height: 150px; object-fit: cover;" />
    <div style="padding: 10px;">
      <h3 style="margin: 0; font-size: 18px;">${title}</h3>
      <button style="background: ${color}; color: white; padding: 6px 12px; border: none; border-radius: 4px; margin-top: 8px;">
        ${cta}
      </button>
    </div>
  </div>
</a>`;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🎨 Banner Generator</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Banner Title"
            className="w-full border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="CTA Button Text"
            className="w-full border p-2 rounded"
            value={cta}
            onChange={(e) => setCta(e.target.value)}
          />
          <input
            type="color"
            className="w-full border p-2 rounded"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            className="w-full border p-2 rounded"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="text"
            placeholder="Target URL"
            className="w-full border p-2 rounded"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <div className="border rounded p-4 bg-white shadow">
          <h4 className="text-lg font-semibold mb-2">Live Preview</h4>
          <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Embed HTML</h4>
        <textarea
          readOnly
          value={htmlCode}
          className="w-full h-40 border p-2 font-mono bg-gray-50"
        />
      </div>
    </div>
  );
};

export default BannerGenerator;
