import axios from "axios";
import { useState, useEffect } from "react";
import User from "./user/User";
import { Box, CircularProgress, Pagination, Typography } from "@mui/material";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setUsers(response.data.users);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Box sx={{ padding: "50px" , backgroundColor:"secondary" }}>
      <Typography variant="h3" sx={{ mb: 4, color: "secondary", textAlign: "center" }}>
        Users Card
      </Typography>
      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <User users={currentItems} />
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
            <Pagination
              count={Math.ceil(users.length / itemsPerPage)}
              page={currentPage}
              onChange={(event, value) => paginate(value)}
              color="primary"
            />
          </Box>
        </>
      )}
    </Box>
  );
}

export default Users;
