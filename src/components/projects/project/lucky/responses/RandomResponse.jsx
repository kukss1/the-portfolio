import React from "react";
import { useState, useEffect,useCallback,memo } from "react";

import "./RandomResponse.css";
import load from '../../../../../assets/images/gif/YlWC.gif'
import btnload from '../../../../../assets/images/gif/btnLoader.gif'


const RandomResponse = ({ responses }) => {
  const [selectedResponse, setSelectedResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = useCallback(() => {
    setIsLoading(true)
    const randomIndex = Math.floor(Math.random() * responses.length);
    setSelectedResponse("");
    setTimeout(() => {
      setSelectedResponse(responses[randomIndex]);
      setIsLoading(false);
    }, 2000); 
  }, [responses]);

  useEffect(() => {
    setSelectedResponse("");
  }, [handleClick]);

console.log(selectedResponse)

  return (
    <>
      <div className="response_wrapper">
        <div>
        {
          isLoading ? <img src={load} alt="loading"  className="loader_response_gif"/>
                    :<h1 className="response_body">{selectedResponse}</h1>
        }
          
        </div>
      </div>
      <div className="response_btn">
        <button onClick={handleClick} className="response_btn_body"  >
        {isLoading ? <img src={btnload} alt="load" className="response_btn_loader"/> : "Tap to know"}
        </button>
      </div>
    </>
  );
};

export default memo(RandomResponse);
