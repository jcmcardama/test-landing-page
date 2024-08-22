import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Grid, styled } from '@mui/material';

const StyledGrid = styled(Grid)(() => {
    return {
      height: 'calc(100% - 128px)'
    };
});

function App() {
  return (
    <Grid sx={{ height: "100vh" }}>
      <Header />
      <StyledGrid item>
        <Outlet />
      </StyledGrid>
      <Footer />
    </Grid>
  )
}

export default App
