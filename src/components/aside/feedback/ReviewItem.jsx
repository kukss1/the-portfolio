import { Grid, Box, Typography, Avatar } from "@mui/material";
import { styled } from "@mui/material";

const ReviewItemRoot = styled(Grid)(({ theme }) => ({
  margin: "1rem",
  padding: "1rem",
  "& .MuiTypography-root": {
    marginBottom: "0.5rem",
  },
  "& .MuiTypography-h6": {
    fontWeight: "bold",
  },
  "& .MuiTypography-subtitle2": {
    color: "#888",
  },
  "& .MuiBox-root": {
    border: `1px solid ${theme.palette.mode === "dark" ? "#555" : "#000"}`,
    padding: "1rem",
    borderRadius: "4px",
  },
}));

function ReviewItem({ review }) {
  return (
    <ReviewItemRoot item xs={12} md={6} lg={4}>
      <Box display="flex" alignItems="center">
        <Avatar src={review.avatar} alt="avatar" />
        <Box marginLeft="1rem">
          <Typography variant="h6" gutterBottom>
            {review.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {review.comment}
          </Typography>
          <Typography variant="subtitle2">{review.email}</Typography>
          <Typography variant="subtitle2" gutterBottom>
            {review.createdAt}
          </Typography>
        </Box>
      </Box>
    </ReviewItemRoot>
  );
}

export default ReviewItem;
