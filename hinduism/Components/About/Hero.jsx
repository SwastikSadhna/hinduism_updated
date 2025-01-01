import Button from "./Button";
import { imageDetails } from "../../resources";

export default function Hero() {
  return (
    <div className="bg-zinc-200 py-16 ">
      <div className="container mx-auto mt-14 px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About Our Company
          </h1>
          <p className="text-gray-600 text-lg mb-6 max-w-md">
            🌄 Hindutva: Discover the World’s Oldest Religion At Hindutva, we celebrate the profound spiritual and cultural legacy of Sanatan Hindu Dharma. Our platform is a gateway to explore the rich heritage of Hinduism, offering deep insights into: </p>
           <p className="text-gray-600 text-lg mb-6 max-w-md"> 🔧 Powered By: Cutting-edge technology like React.js, Tailwind CSS, and Node.js. </p>
           <p className="text-gray-600 text-lg mb-6 max-w-md">    🧡Join Us: Be part of our journey as we bring Sanatan Dharma closer to the digital age.
          </p>
          <Button>LEARN MORE</Button>
          <p className="mt-4 text-sm text-gray-500">Image from Freepik</p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-blue-500 rounded-full  opacity-20 blur-2xl"></div>
            <img
              src={imageDetails.logo.src}
              alt="Company Logo"
              className="relative w-full h-full object-contain rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
