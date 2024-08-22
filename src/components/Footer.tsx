import { Container, styled, Typography } from "@mui/material";

const StyledContainer = styled(Container)((theme) => {
    return {
        backgroundColor: theme.theme.palette.primary.main,
        padding: "20px 0",
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