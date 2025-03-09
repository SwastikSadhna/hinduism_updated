import Header from "../Components/Bhajan/BhaktiHeader";
import Content from "../Components/Bhajan/BhaktiContent";
import { useEffect, useState } from "react";
import API_CONFIG from "../src/config/api";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import ErrorPage from'../Pages/ErrorPage'


export default function App() {

  const [content, setContent] = new useState({})
  const {id} = useParams()
  const [isLoading, setIsLoading] = new useState(true)
  const [error, setError] = new useState(false)
  
  useEffect(()=>{
    axios.get(API_CONFIG.baseUrl + "/bhakti/"+id)
    .then((res)=>{
      console.log(res.data)
      setContent(res.data[0])
      setIsLoading(false)
    }).catch((err)=>{
      setIsLoading(false)
      console.log(err)
      setError(true)
    })
  },[])

  return (
    <>
    {isLoading || error ? isLoading ? <Loading />: <ErrorPage /> :
    <div className="min-h-screen bg-gray-50">
    {isLoading ? <Loading />:
    <>
      <Header data={{...content}} />
      <Content data={{...content}} />
    </>
    }
      </div>
}
  </>
  );
}
