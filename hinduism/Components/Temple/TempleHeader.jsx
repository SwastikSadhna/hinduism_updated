import { imageDetails } from "../../resources"
import API_CONFIG from "../../src/config/api"

export function Header({ name, location, image }) {
  
  return (
    <header className="relative w-full h-[90vh] bg-[100% 100%] bg-no-repeat bg-center flex flex-col justify-center items-start text-white px-8" 
      style={{ backgroundImage: `url(${image})` }}>
      {/* Overlay to enhance text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      {/* Content */}
            <div className="relative z-10 container mx-auto">
        <p className="text-gray-300 text-sm">General Practitioner</p>
        <h1 className="text-5xl font-bold mt-2">{name}</h1>
        <p className="text-xl mt-2">{location}</p>
      </div>
    </header>
  );
}
