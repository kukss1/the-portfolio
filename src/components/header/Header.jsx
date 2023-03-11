import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";

function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link to="/">Welcome to my portfolio page</Link>
          </Typography>
          <Typography variant="subtitle1" sx={{ ml: 2, flexGrow: 0 }}>
            {time.toLocaleTimeString()}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
