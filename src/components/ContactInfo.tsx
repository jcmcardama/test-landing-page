import { Grid, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ContactInfo = () => {
  return (
    <Grid 
        container 
        alignContent={"center"}
        justifyContent={"center"}
        height={'100%'}
        
    >
        <Grid item textAlign={"center"}>
            <Typography variant="h3">
                Contact Info
            </Typography>
        </Grid>
        <Grid item>
            <Typography paragraph>
                <LocationOnIcon fontSize="small" /> <b>Address</b>
                <Typography>
                    Blk 1 Lot 2 Brgy. Tres, San Juan, Laguna, Philippines 1234
                </Typography>
            </Typography>
            <Typography paragraph>
                <PhoneIcon fontSize="small" /> <b>Phone</b>
                <Typography>
                    +639123456789
                </Typography>
            </Typography>
            <Typography paragraph>
                <EmailIcon fontSize="small" /> <b>Email</b>
                <Typography>
                    juan_dela_cruz@gmail.com
                </Typography>
            </Typography>
        </Grid>
    </Grid>
  )
};

export default ContactInfo;