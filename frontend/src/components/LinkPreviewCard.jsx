const LinkPreviewCard = ({ data }) => {
  const { title, description, images, url } = data;

  return (
    <div className="border rounded-lg overflow-hidden shadow bg-white mt-4">
      {images && images.length > 0 && (
        <img src={images[0]} alt="preview" className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:underline">
          {title}
        </a>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default LinkPreviewCard;
