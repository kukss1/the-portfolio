import React, { useState, useEffect, useCallback, memo } from "react";
import { styled } from "@mui/material/styles";

import load from "../../../../../assets/images/gif/YlWC.gif";
import btnload from "../../../../../assets/images/gif/btnLoader.gif";

const ResponseWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "200px",
  backgroundColor: "#f5f5f5",
  borderRadius: "10px",
});

const ResponseBody = styled("h1")({
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: "#000",
});

const ResponseBtn = styled("button")({
  border: "none",
  borderRadius: "10px",
  padding: "20px",
  fontSize: "1.5rem",
  fontWeight: "bold",
  backgroundColor: "#4caf50",
  color: "#fff",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "#388e3c",
  },
});

const ResponseBtnLoader = styled("img")({
  height: "30px",
});

const ResponseLoaderGif = styled("img")({
  height: "100px",
});

const RandomResponse = ({ responses }) => {
  const [selectedResponse, setSelectedResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);
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

  return (
    <>
      <ResponseWrapper>
        {isLoading ? (
          <ResponseLoaderGif src={load} alt="loading" />
        ) : (
          <ResponseBody>{selectedResponse}</ResponseBody>
        )}
      </ResponseWrapper>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ResponseBtn onClick={handleClick}>
          {isLoading ? (
            <ResponseBtnLoader src={btnload} alt="load" />
          ) : (
            "Tap to know"
          )}
        </ResponseBtn>
      </div>
    </>
  );
};

export default memo(RandomResponse);
