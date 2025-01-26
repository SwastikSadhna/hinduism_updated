import { Link } from "react-router-dom";
import { imageDetails } from "../resources";

const ErrorPage = ({code, message}) => {
    return <div className="flex flex-col items-center justify-center bg-gray-50 text-foreground p-4 w-full">
    <div className="w-full max-w-md text-center align-center">
      <img src={imageDetails.error.src} width={200} className="ml-12"></img>
        <h1 className="text-8xl font-bold -mt-40 mb-20 ml-40" style={{color: "#6c63ff"}}>{ code }</h1>
        <h1 className="text-4xl font-bold mb-4" style={{ textDecoration:"underline"}}>{message}</h1>
      <p className="text-lg mb-8">Oops! The page you're looking for doesn't exist or some internal error occured.</p>
      <div className="flex justify-center space-x-4">
        <Link to={"/"}>
            <button className="bg-orange-400 p-3 rounded-md text-[1em] font-bold "> Back to Home</button>
        </Link>
      </div>
    </div>
  </div>
}

export default ErrorPage;