import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography, IconButton, Button, Menu, MenuItem } from "@mui/material";
import { MdCasino, MdList, MdWidgets, MdFunctions, MdPublic, MdCamera } from "react-icons/md";

function Projects() {
  const projectList = [
    { title: "Try your luck", path: "lucky", icon: <MdCasino /> },
    { title: "ToDo with React draggable", path: "todo", icon: <MdList /> },
    { title: "Fetching data with interesting user cards", path: "users", icon: <MdWidgets /> },
    { title: "Just calculator", path: "calculator", icon: <MdFunctions /> },
    { title: "Live News from The Guardian news portal", path: "news", icon: <MdPublic /> },
    { title: "Wonderful NASA's Photo of Day", path: "nasa", icon: <MdCamera /> },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box
      sx={{
        backgroundImage: 'url("https://source.unsplash.com/random/1600x900")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "30vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center"}}>
        <Button
          variant="contained"
          color="primary"
          aria-controls="projects-menu"
          aria-haspopup="true"
          onClick={handleOpen}
        >
          Tap to see Projects Menu
        </Button>
        <Menu id="projects-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          {projectList.map((project) => (
            <MenuItem key={project.path} onClick={handleClose}>
              <NavLink to={project.path} sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  sx={{ mr: 1, boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)", "&:hover": { transform: "translateY(-3px)" } }}
                  color="secondary"
                  aria-label={project.title}
                >
                  {project.icon}
                </IconButton>
                <Typography variant="subtitle1" color="primary" sx={{ textTransform: "capitalize" }}>
                  {project.title}
                </Typography>
              </NavLink>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );
}

export default Projects;
