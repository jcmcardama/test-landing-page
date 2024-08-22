import { FormControl, Grid, TextField, Button, Box, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ContactForm = () => {
  return (
    <Grid container my={'16px'}>
        <Box>
            <Typography variant="h2">
                Contact ME!
            </Typography>
            <Typography paragraph>
                Fill up the form below to send me an email and I will reply to you as soon as possible.
            </Typography>
        </Box>
        <FormControl>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent={"center"}>
                        <Button variant="contained" endIcon={<SendIcon />} size='large'>
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </FormControl>
    </Grid>
  )
};

export default ContactForm;