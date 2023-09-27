import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const DonationCard = ({ cardData }) => {
    const { ID, Picture, Category
        , Title, Button_BG_Color, Card_BG_Color, Text_BG_Color } = cardData;

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/donationDetails/${ID}`)} className="card card-compact" style={{
            background: Card_BG_Color,
        }}>
            <figure>
                <img className='w-full object-cover' src={Picture} alt="Shoes" />
            </figure>
            <div className="p-4 space-y-4">
                <span className="px-4 py-2 rounded-md font-medium" style={{
                    background: Button_BG_Color,
                    color: Text_BG_Color,
                }}>{Category}</span>
                <p className='text-xl font-semibold' style={{
                    color: Text_BG_Color
                }}>{Title}</p>
            </div>
        </div>
    );
}

DonationCard.propTypes = {
    cardData: PropTypes.object.isRequired,
};

export default DonationCard;