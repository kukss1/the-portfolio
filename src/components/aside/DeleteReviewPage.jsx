import { useState } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

function DeleteReview() {
  const [reviews, setReviews] = useState([]);

  const handleDeleteReview = async (id) => {
    try {
      await axios.delete(`https://64160748351c4aed4915df08.mockapi.io/reviews/${id}`);
      setReviews(reviews.filter((review) => review.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleFetchReviews = async () => {
    try {
      const response = await axios.get("https://64160748351c4aed4915df08.mockapi.io/reviews");
      setReviews(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Delete Review</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Content</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reviews.map((review) => (
              <TableRow key={review.id}>
                <TableCell>{review.id}</TableCell>
                <TableCell>{review.content}</TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => handleDeleteReview(review.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={handleFetchReviews}>Fetch Reviews</Button>
    </div>
  );
}

export default DeleteReview;
