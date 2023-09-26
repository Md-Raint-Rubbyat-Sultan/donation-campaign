import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { addDataToLocalStore } from '../../hooks/localStoreHook';


const DonationDetails = () => {
    const data = useLoaderData();
    const { ID, Title, Description, Text_BG_Color, Price, Picture } = data;

    const handelDonationBtn = id => {
        toast.success(addDataToLocalStore(id));
    }

    return (
        <div className='container mx-auto py-20 px-4 lg:px-0'>
            <div className='relative overflow-hidden rounded-lg mb-14'>
                <img className='w-full h-72 md:h-96 lg:h-[700]' src={Picture} alt={Title} />
                <div className='absolute backdrop-brightness-50 w-full bottom-0 p-9'>
                    <button onClick={() => handelDonationBtn(ID)} style={{
                        background: Text_BG_Color,
                    }} className='py-4 px-6 text-white rounded'>Donate ${Price}</button>
                </div>
            </div>
            <h3 className='text-4xl font-bold mb-6'>{Title}</h3>
            <p>{Description}</p>
        </div>
    );
};

export default DonationDetails;