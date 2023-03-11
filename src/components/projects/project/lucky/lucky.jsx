import { Box, Typography } from "@mui/material";
import { responses } from "../../../../assets/jsons/response";
import RandomResponse from "./responses/RandomResponse";

function Lucky() {
  return (
    <Box sx={{ backgroundColor: "#fff", py: 8 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Typography variant="h3" sx={{ mb: 4 }}>
          Am I lucky today?
        </Typography>
        <RandomResponse responses={responses} />
      </Box>
    </Box>
  );
}

export default Lucky;
