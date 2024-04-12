import React, { useState, useEffect } from "react";
import Search from "./Search";
import PlantList from "./PlantList";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPlants = async () => {
      const response = await fetch("http://127.0.0.1:6001/plants");
      const data = await response.json();
      setPlants(data);
    };

    fetchPlants();
  }, []);

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Search onSearch={setSearchTerm} />
      <PlantList plants={filteredPlants} />
    </div>
  );
}

export default PlantPage;
