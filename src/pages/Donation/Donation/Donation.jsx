import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getDataFromLocalStore } from '../../../hooks/localStoreHook';
import DonatedCard from '../DonatedCard/DonatedCard';

const Donation = () => {
    const donationData = useLoaderData();
    const [donated, setDonated] = useState(() => []);
    const [displayDonated, setDisplayDonated] = useState(() => []);
    const [showAllBtn, setShowAllBtn] = useState(() => true);

    const loadDataFromLocalStore = async () => {
        const storedData = await getDataFromLocalStore();
        const donatedData = await donationData.filter(data => storedData.includes(data?.ID));

        setDonated(() => donatedData);
        setDisplayDonated(() => donatedData.slice(0, 4));
    }

    useEffect(() => {
        let mount = true;
        loadDataFromLocalStore();
        return () => mount = false;
    }, [])

    const handelShowAllBtn = () => {
        setDisplayDonated(() => donated);
        setShowAllBtn(() => false);
    }

    return (
        <div className='container mx-auto my-20 px-4 lg:px-0'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {
                    displayDonated.map((donate, idx) => <DonatedCard key={idx} donate={donate} />)
                }
            </div>
            <div className='text-center'>
                {
                    (donated.length > 4) &&
                    <button onClick={handelShowAllBtn} className={`text-white font-semibold bg-[#009444] my-10 px-7 py-4 rounded-lg ${showAllBtn ? '' : "hidden"}`}>See All</button>
                }
            </div>
            <h3 className={`text-center text-4xl font-bold ${donated.length > 0 && "hidden"}`}>Please Donate!</h3>
        </div>
    );
};

export default Donation;