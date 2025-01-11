const Card = ({ title, description, image }) => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="group relative w-80 h-80 overflow-hidden rounded-xl shadow-lg">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-transform duration-500 ease-in-out group-hover:scale-110"
          style={{
            aspectRatio: 3 / 3,
            backgroundImage: `url(${image})`,
          }}
          role="img"
          aria-label="Card background image"
        />

        {/* Overlay that appears on hover */}
        <div className="absolute bg-gray-100 opacity-0 transition-opacity duration-300 hover:opacity-100" />

        {/* Text content that slides up on hover */}
        <div className="absolute inset-x-0 bottom-0 bg-gray-900 p-6 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
