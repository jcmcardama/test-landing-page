import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <Typography variant="h1">
        This is the About
      </Typography>
      <Outlet />
    </>
  );
};

export default About;