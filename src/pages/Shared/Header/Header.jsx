import { NavLink } from 'react-router-dom';
import logo from '../../../assets/Logo.png';
import { AiOutlineMenu, AiOutlineCloseSquare } from 'react-icons/ai';
import { useState } from 'react';

const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(() => false);
    return (
        <nav className='flex justify-between items-center pt-6 z-40 container mx-auto'>
            <img className='w-auto h-20' src={logo} alt="Logo" />
            <div onClick={() => setIsMenuActive((prev) => !prev)}>
                {
                    isMenuActive ?
                        <AiOutlineCloseSquare className='md:hidden text-3xl' />
                        :
                        <AiOutlineMenu className='md:hidden text-3xl' />
                }
            </div>
            <ul className={`md:flex items-center gap-12 space-y-3 md:space-y-0 md:static absolute bg-white rounded-lg md:rounded-none md:bg-transparent p-3 md:p-0 right-2 duration-500 ${isMenuActive ? "top-28" : "-top-96"} z-50`}>
                <li><NavLink to={'/'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                }>Home</NavLink></li>
                <li><NavLink to={'/donation'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                }>Donation</NavLink></li>
                <li><NavLink to={'/statistics'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                }>Statistics</NavLink></li>
            </ul>
        </nav>
    );
};

export default Header;