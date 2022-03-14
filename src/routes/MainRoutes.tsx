import { useRoutes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Knowledge } from '../pages/Knowledge';
import { SocialMedia } from '../pages/SocialMedia';
import { NotFound } from '../pages/NotFound';

export const MainRoutes = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/meus-conhecimentos', element: <Knowledge /> },
    { path: '/redes-sociais', element: <SocialMedia /> },
    { path: '/*', element: <NotFound /> },
  ]);
}