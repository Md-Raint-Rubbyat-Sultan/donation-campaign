import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getDataFromLocalStore } from '../../hooks/localStoreHook';

const Donation = () => {
    const donationData = useLoaderData();
    const [donated, setDonated] = useState(() => []);

    const loadDataFromLocalStore = () => {
        const storedData = getDataFromLocalStore();
        const donatedData = donationData.filter(data => storedData.includes(data?.ID));
        
        setDonated(()=>donatedData)
        console.log(donatedData);
    }

    useEffect(() => {
        let mount = true;
        loadDataFromLocalStore()
        return () => mount = false;
    }, [])

    return (
        <div>
            donation
        </div>
    );
};

export default Donation;