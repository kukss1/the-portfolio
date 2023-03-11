import React, { useState, useEffect, useCallback, memo } from "react";
import { useSpring, animated } from "react-spring";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

const ResponseWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "200px",
  backgroundColor: "secondary",
  borderRadius: "10px",
});

const ResponseBody = styled(animated.h1)({
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: "primary",
});

const ResponseBtnWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
});

const ResponseBtnLoader = styled(CircularProgress)({
  color: "primary",
  marginRight: "10px",
});

const ResponseBtn = styled(Button)({
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

const RandomResponse = ({ responses }) => {
  const [selectedResponse, setSelectedResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
  });

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
          <CircularProgress color="primary" />
        ) : (
          <ResponseBody style={fadeIn} color="primary">{selectedResponse}</ResponseBody>
        )}
      </ResponseWrapper>
      <ResponseBtnWrapper>
        <ResponseBtn onClick={handleClick} disabled={isLoading}>
          {isLoading ? (
            <ResponseBtnLoader size={24} thickness={6} />
          ) : (
            "Tap to know"
          )}
        </ResponseBtn>
      </ResponseBtnWrapper>
    </>
  );
};

export default memo(RandomResponse);
