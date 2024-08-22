import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <Typography variant="h1">
        This is the Projects
      </Typography>
      <Outlet />
    </>
  );
};

export default Projects;