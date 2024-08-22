import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const Skills = () => {
  return (
    <>
      <Typography variant="h1">
        This is the Skills
      </Typography>
      <Outlet />
    </>
  );
};

export default Skills;