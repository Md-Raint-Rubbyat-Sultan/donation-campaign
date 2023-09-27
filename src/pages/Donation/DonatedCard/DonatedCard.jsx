import PropTypes from 'prop-types';

const DonatedCard = ({ donate }) => {
    const { Picture, Category, Title, Price, Text_BG_Color, Button_BG_Color, Card_BG_Color } = donate;
    return (
        <div className="card md:card-side" style={{
            background: Card_BG_Color,
        }}>
            <figure>
                <img className='w-full md:h-full md:w-auto rounded-2xl' src={Picture} alt={Title} />
            </figure>
            <div className="p-6 space-y-5">
                <div className='space-y-2'>
                    <span className='px-2 py-1 rounded' style={{
                        color: Text_BG_Color,
                        background: Button_BG_Color
                    }}>{Category}</span>
                    <h2 className="card-title font-semibold">{Title}</h2>
                    <p className='font-semibold' style={{
                        color: Text_BG_Color,
                    }}>${Price}</p>
                </div>
                <div className="card-actions justify-start">
                    <button className="px-4 py-2 text-white font-bold rounded" style={{
                        background: Text_BG_Color,
                    }}>View Details</button>
                </div>
            </div>
        </div>
    );
}

DonatedCard.propTypes = {
    donate: PropTypes.object.isRequired,
};

export default DonatedCard;