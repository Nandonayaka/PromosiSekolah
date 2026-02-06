import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './view/layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import PixelWorld from './pages/PixelWorld';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'pixel-world',
        element: <PixelWorld />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
