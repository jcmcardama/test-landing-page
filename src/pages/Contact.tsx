import { Grid } from "@mui/material";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import ContactSocMed from "../components/ContactSocMed";

const Contact = () => {
  return (
    <Grid 
      container 
      height={'100%'}
      px={'16px'}
    >
      <Grid item xs={8}>
        <ContactForm />
      </Grid>
      <Grid item xs={4}>
        <ContactInfo />
      </Grid>
      <Grid item xs={12} >
        <ContactSocMed />
      </Grid>
    </Grid>
  );
};

export default Contact;