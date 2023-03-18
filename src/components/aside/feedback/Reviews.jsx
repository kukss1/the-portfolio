import { useState, useEffect } from 'react';
import { Grid , Typography , Box} from '@mui/material';
import ReviewItem from './ReviewItem';
import AddReview from './AddReview';
import axios from 'axios';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await axios.get(
          'https://64160748351c4aed4915df08.mockapi.io/reviews'
        );
        setReviews(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchReviews();
  }, []);
  const handleReviewAdded = (newReview) => {
    setReviews([...reviews, newReview]); // добавляем новый отзыв в локальное состояние
  };
  return (
    <>
<Grid container justifyContent="center" spacing={2}>
  <Grid item xs={12} md={8}>
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" align="center">
        Feedback Zone
      </Typography>
    </Box>
    <Grid container spacing={2} justifyContent="center">
      {reviews.map((review) => (
        <Grid item xs={12} sm={6} key={review.id}>
          <ReviewItem review={review} />
        </Grid>
      ))}
    </Grid>
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={6}>
        <AddReview onReviewAdded={handleReviewAdded} />
      </Grid>
    </Grid>
  </Grid>
</Grid>
  </>

  );
}

export default Reviews;
