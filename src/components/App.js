import { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import NewPlantForm from "./NewPlantForm";
import PlantCard from "./PlantCard";

function App() {
  const [plants, setPlants] = useState([]);

  const onAddPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  const markAsSoldOut = (id) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === id ? { ...plant, inStock: !plant.inStock } : plant
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <PlantPage />
      <NewPlantForm onAddPlant={onAddPlant} />
      {plants.map((plant) => (
        <PlantCard
          plant={plant}
          onAddPlant={onAddPlant}
          onMarkAsSoldOut={markAsSoldOut}
        />
      ))}
    </div>
  );
}

export default App;
