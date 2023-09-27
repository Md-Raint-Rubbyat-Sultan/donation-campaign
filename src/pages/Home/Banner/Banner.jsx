import PropTypes from 'prop-types';
import './Banner.css';
import { useRef } from 'react';

const Banner = ({ handelSearch }) => {
    const searchRef = useRef(null);
    return (
        <div className='w-full px-8 py-16 md:py-40 banner-bg'>
            <h2 className='text-5xl text-center font-bold'>I Grow By Helping People In Need</h2>
            <div className='container mx-auto flex items-center justify-center pt-10'>
                <input ref={searchRef} className='p-4 border rounded-l-lg w-1/2' type="text" placeholder='Search here....' />
                <div onClick={() => handelSearch(searchRef.current.value)} className='px-7 py-4 bg-[#FF444A] text-white font-semibold rounded-r-lg border border-[#FF444A] hover:cursor-pointer' >
                    <input className='hover:cursor-pointer' type="button" value="Search" />
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    handelSearch: PropTypes.func,
}

export default Banner;