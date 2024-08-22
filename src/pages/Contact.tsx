import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Typography variant="h1">
        This is the Contact
      </Typography>
      <Outlet />
    </>
  );
};

export default Contact;