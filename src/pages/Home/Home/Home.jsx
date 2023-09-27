import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import DonationCard from '../DonationCard/DonationCard';
import { useState } from 'react';

const Home = () => {
    const donationCardData = useLoaderData();
    const [searchCategory, setSearchCategory] = useState(() => donationCardData);
    const [noDataFound, setNoDataFond] = useState(() => false);

    const handelSearch = search => {
        setNoDataFond(() => false);
        if (search === '') {
            setSearchCategory(() => donationCardData);
        } else {
            const searchedCategory = donationCardData.filter(category => category?.Category.toLowerCase().includes(search.toLowerCase()));

            if (searchedCategory.length > 0) {
                setSearchCategory(() => searchedCategory);
            } else {
                setSearchCategory(() => searchedCategory);
                setNoDataFond(() => true);
            }
        }
    }

    return (
        <div>
            <Banner handelSearch={handelSearch} />
            <div className='container mx-auto my-12 px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    searchCategory.map((cardData, idx) => <DonationCard key={idx} cardData={cardData} />)
                }
            </div>
            {
                noDataFound && <p className='text-center text-4xl text-red-500 font-bold'>No matched data found!</p>
            }
        </div>
    );
};

export default Home;