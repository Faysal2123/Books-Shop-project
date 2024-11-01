import React, { Children, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Error from './Error/Error.jsx';
import Home from './Home/Home.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<Error></Error>,
    children:[
     {
      path:'/',
      element:<Home></Home>
     },
     {
      path:'Dashboard',
      element:<Dashboard></Dashboard>
     }
     ]
  },
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
