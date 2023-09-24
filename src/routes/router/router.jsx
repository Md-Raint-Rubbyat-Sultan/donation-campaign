import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root/Root";
import Home from "../../pages/Home/Home";
import ErrorPage from "../../pages/Shared/Error/Error";
import Donation from '../../pages/Donation/Donation';
import Statistics from '../../pages/Statistics/Statistics';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/donation',
                element: <Donation />,
            },
            {
                path: '/statistics',
                element: <Statistics />,
            },
        ]
    }
])