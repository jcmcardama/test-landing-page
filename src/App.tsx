import { Outlet, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import router from './routes/Routes';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
