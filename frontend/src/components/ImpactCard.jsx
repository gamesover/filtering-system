const ImpactCard = ({ card }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold">{card.brand}</h3>
      <p>Location: {card.location}</p>
      <p>Sponsor: {card.sponsor}</p>
      <p>Reward: {card.reward}</p>
    </div>
  );
};

export default ImpactCard;
