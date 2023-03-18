import Reviews from "../feedback/Reviews";
import About from "./About";
import { Box } from "@mui/material";

function Home() {
  return (
    <Box sx={{ mt: 4 }}>
      <About />
      <Box sx={{ mt: 4 }}>
        <Reviews />
      </Box>
    </Box>
  );
}

export default Home;
