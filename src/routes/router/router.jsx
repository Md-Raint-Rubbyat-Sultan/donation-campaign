import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root/Root";
import Home from "../../pages/Home/Home/Home";
import ErrorPage from "../../pages/Shared/Error/Error";
import Donation from '../../pages/Donation/Donation';
import DonationDetails from '../../pages/DonationDetails/DonationDetails';
import Statistics from '../../pages/Statistics/Statistics';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                loader: async () => await fetch('../../../public/fakeData.json'),
                element: <Home />,
            },
            {
                path: '/donation',
                loader: async () => await fetch("../../../public/fakeData.json"),
                element: <Donation />,
            },
            {
                path: '/donationDetails/:id',
                loader: async ({ params }) => {
                    const res = await fetch('../../../public/fakeData.json');
                    const data = await res.json();
                    const dataToGet = await data.find(singleData => singleData?.ID.toString() === params.id);
                    return dataToGet;
                },
                element: <DonationDetails />,
            },
            {
                path: '/statistics',
                element: <Statistics />,
            },
        ]
    }
])