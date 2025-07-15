import { Link } from "react-router-dom";
import { imageDetails } from "../resources";

const ErrorPage = ({code = 500, message = "Internal Server Error"}) => {
    return <div className="flex items-center justify-center bg-gray-50 text-foreground p-10 border border-orange-500 w-full">
    <div className="w-full max-w-md text-center align-center">
  <h1 className="text-7xl font-extrabold text-orange-500">{code}</h1>
        <h1 className="text-3xl font-bold mb-2">{message}</h1>
      <p className="mb-4">Oops! The page you're looking for doesn't exist or some internal error occured.</p>
      <div className="flex justify-center space-x-4">
        <Link to={"/"}>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 hover:from-orange-600 hover:to-orange-700 rounded-tl-2xl rounded-br-2xl py-3 px-8 text-[1em] font-bold text-white"> Back to Home</button>
        </Link>
      </div>
    </div>
  </div>
}

export default ErrorPage;