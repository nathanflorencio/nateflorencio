import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { NotFound } from './pages/404'
import { Experience } from './pages/app/experience'
import { Home } from './pages/app/home'
import { Knowledge } from './pages/app/knowledge'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/meus-conhecimentos', element: <Knowledge /> },
      { path: '/minhas-experiencias', element: <Experience /> },
    ],
  },
])
