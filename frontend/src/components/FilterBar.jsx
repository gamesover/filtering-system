import { useState } from "react";

const FilterBar = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    brand: "",
    location: "",
    sponsor: "",
    reward: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    onFilter(filters);
  };

  return (
    <div className="p-4 border-b">
      <input
        name="brand"
        placeholder="Brand"
        className="border p-2 mr-2"
        onChange={handleChange}
      />
      <input
        name="location"
        placeholder="Location"
        className="border p-2 mr-2"
        onChange={handleChange}
      />
      <input
        name="sponsor"
        placeholder="Sponsor"
        className="border p-2 mr-2"
        onChange={handleChange}
      />
      <input
        name="reward"
        placeholder="Reward"
        className="border p-2 mr-2"
        onChange={handleChange}
      />
      <button onClick={applyFilters} className="bg-blue-500 text-white p-2">
        Filter
      </button>
    </div>
  );
};

export default FilterBar;
