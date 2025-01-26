import PropTypes from 'prop-types';

const ImpactCard = ({ card }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">Brand: {card.brand}</h3>
      <p className="font-bold">Location: <span className="font-normal">{card.location}</span></p>
      <p className="font-bold">Sponsor: <span className="font-normal">{card.sponsor}</span></p>
      <p className="font-bold">Reward: <span className="font-normal">{card.reward}</span></p>
    </div>
  );
};

ImpactCard.propTypes = {
  card: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    sponsor: PropTypes.string.isRequired,
    reward: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImpactCard;
