import './Banner.css';

const Banner = () => {
    return (
        <div className='w-full px-8 py-16 md:py-40 banner-bg'>
            <h2 className='text-5xl text-center font-bold'>I Grow By Helping People In Need</h2>
            <div className='container mx-auto flex items-center justify-center pt-10'>
                <input className='p-4 border rounded-l-lg w-1/2' type="text" placeholder='Search here....' />
                <div className='px-7 py-4 bg-[#FF444A] text-white font-semibold rounded-r-lg border border-[#FF444A] hover:cursor-pointer' >
                    <input className='hover:cursor-pointer' type="button" value="submit" />
                </div>
            </div>
        </div>
    );
};

export default Banner;