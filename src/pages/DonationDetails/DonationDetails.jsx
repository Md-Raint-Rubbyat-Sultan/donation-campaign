import { useLoaderData, useParams } from 'react-router-dom';

const DonationDetails = () => {
    const data = useLoaderData();

    console.log(data);

    return (
        <div>
            donation details
        </div>
    );
};

export default DonationDetails;