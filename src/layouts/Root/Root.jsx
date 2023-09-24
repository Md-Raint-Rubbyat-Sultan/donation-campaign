import { Outlet } from 'react-router-dom';
import Header from '../../pages/Shared/Header/Header';

const Root = () => {
    return (
        <div className='container mx-auto'>
            <Header />
            <Outlet />
        </div>
    );
};

export default Root;