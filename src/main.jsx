import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Movies from './pages/Movies';
import Reports from './pages/Reports';
import MovieDetails from './pages/MovieDetails'; 

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/reports",
        element: <Reports />,
    },
    {
        path: "/movies",
        element: <Movies />,
    },
    {
        path: "/movies/:movieId",
        element: <MovieDetails />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
