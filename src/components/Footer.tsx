import { Box, styled, Typography } from "@mui/material";

const StyledContainer = styled(Box)((theme) => {
    return {
        backgroundColor: theme.theme.palette.primary.main,
        padding: "20px 0",
        color: theme.theme.palette.background.default
    };
});

const Footer = () => {
  return (
    <StyledContainer>
        <Typography
            align="center"
        >
            Copyright © 2024 Jan Carlo Cardama.
        </Typography>
    </StyledContainer>
  );
};

export default Footer;