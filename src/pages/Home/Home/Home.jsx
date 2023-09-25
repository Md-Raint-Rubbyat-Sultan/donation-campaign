import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import DonationCard from '../DonationCard/DonationCard';

const Home = () => {

    const donationCardData = useLoaderData();
    console.log(donationCardData)

    return (
        <div>
            <Banner />
            <div className='container mx-auto my-12 px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    donationCardData.map((cardData, idx) => <DonationCard key={idx} cardData={cardData} />)
                }
            </div>
        </div>
    );
};

export default Home;