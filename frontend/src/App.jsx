import { useState, useEffect } from "react";
import { fetchImpactCards } from "./services/api";
import ImpactCard from "./components/ImpactCard";
import FilterBar from "./components/FilterBar";

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards({});
  }, []);

  const fetchCards = async (filters) => {
    const cards = await fetchImpactCards(filters);
    setCards(cards);
  };

  return (
    <div className="container mx-auto p-4">
      <FilterBar onFilter={fetchCards} />
      <div className="grid grid-cols-3 gap-4 mt-4">
        {cards.map((card) => (
          <ImpactCard key={card.card_id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default App;
