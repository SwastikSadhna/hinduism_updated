export default function BhaktiCard({ type, description, count, path, image }) {

  return (
    <div 
      className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
    >
      <div className="flex flex-col items-center space-y-4">
        <img src={image} />
        <h3 className="text-xl font-semibold text-gray-800">{type}</h3>
        {/* <p className="text-gray-600 text-center text-sm">{title}</p> */}
      </div>
    </div>
  );
}

