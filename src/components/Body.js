import React from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchPage from './WatchPage';
import Trailer from './Trailer';


const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        },
        {
            path:"/browse",
            element:<Browse />
        },
        {
            path:"/watch",
            element:<WatchPage />
        },
        {
            path: "/watchtrailer",
            element:<Trailer />
        }
        
    ]);

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body