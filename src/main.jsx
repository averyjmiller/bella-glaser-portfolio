import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ReelPage from './pages/ReelPage.jsx';
import ResumePage from './pages/ResumePage.jsx';
import HeadshotsPage from './pages/HeadshotsPage';
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'reel',
        element: <ReelPage />
      },
      {
        path: 'resume',
        element: <ResumePage />
      },
      {
        path: 'headshots',
        element: <HeadshotsPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
