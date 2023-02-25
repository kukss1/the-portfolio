import { useEffect, useState } from "react";
import axios from "axios";

import "./Nasa.css";

import load from '../../../../assets/images/gif/btnLoader.gif'

function Nasa() {
  const [nasaApi, setNasaApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    try {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=aTimRCpZfmQrg1XJxnVSy2JGaXvtM6XzHy5SUetz"
      )
      .then((response) => {
        setNasaApi(response.data);
        setIsLoading(false)
      }) 
    } catch(error) {
        console.error(error)
    }
  }, []);

  return (
    <>
      <h1 className="nasa_title">Awesome NASA`s Photo of day</h1>
      <div className="nasa_wrapper">
        <h2>{nasaApi.copyright}</h2>
        <h4>{nasaApi.date}</h4>
        <h3>{nasaApi.title}</h3>
        <div className="nasa_body">
        {
            isLoading ? <img src={load} alt='loading'/>
                      :<img src={nasaApi.hdurl} alt="day Pic" />
        }
        <p>{nasaApi.explanation}</p>
        </div>
        <div className="nasa_link">
        <a href={nasaApi.url} target="_blank" rel="noreferrer">
          See Photo
        </a>   
        </div>

      </div>
    </>
  );
}

export default Nasa;
