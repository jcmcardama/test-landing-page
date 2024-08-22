import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Typography variant="h1">
        This is the Homepage
      </Typography>
      <Outlet />
    </>
  );
};

export default Home;