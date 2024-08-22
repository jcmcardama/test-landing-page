import { createBrowserRouter } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/skills",
    element: <About />,
  },
  {
    path: "/projects",
    element: <About />,
  },
  {
    path: "/contact",
    element: <About />,
  }
])

export default router;