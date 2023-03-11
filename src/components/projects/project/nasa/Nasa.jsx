import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

const Title = styled(Typography)({
  fontSize: 30,
  fontWeight: "bold",
  marginBottom: 20,
});

const Wrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 20,
});

const Image = styled("img")({
  width: "100%",
  objectFit: "cover",
  maxHeight: "50vh",
  borderRadius: 10,
});

function Nasa() {
  const [nasaApi, setNasaApi] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    try {
      axios
        .get(
          "https://api.nasa.gov/planetary/apod?api_key=aTimRCpZfmQrg1XJxnVSy2JGaXvtM6XzHy5SUetz"
        )
        .then((response) => {
          setNasaApi(response.data);
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <Title align="center">Awesome NASA's Photo of the Day</Title>
      <Wrapper>
        <Typography variant="h5" align="center" color="textSecondary">
          {nasaApi.date}
        </Typography>
        <Typography variant="h4" align="center">
          {nasaApi.title}
        </Typography>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Image src={nasaApi.hdurl} alt="NASA pic of the day" />
        )}
        <Typography variant="body1" align="justify">
          {nasaApi.explanation}
        </Typography>
        <a href={nasaApi.url} target="_blank" rel="noreferrer">
          See Photo
        </a>
      </Wrapper>
    </>
  );
}

export default Nasa;
