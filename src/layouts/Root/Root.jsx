import { Outlet } from 'react-router-dom';
import Header from '../../pages/Shared/Header/Header';
import toast, { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Toaster />
        </div>
    );
};

export default Root;