import { Grid, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const ContactSocMed = () => {
  return (
    <Grid
        container 
        columnSpacing={4}
        justifyContent={"center"}
    >
        <Grid item>
        <IconButton >
            <FacebookIcon color="primary" fontSize="large" />
        </IconButton >
        </Grid>
        <Grid item>
        <IconButton >
            <TwitterIcon color="primary" fontSize="large" />
        </IconButton >
        </Grid>
        <Grid item>
        <IconButton >
            <GitHubIcon color="primary" fontSize="large" />
        </IconButton >
        </Grid>
    </Grid>
  )
};

export default ContactSocMed;