import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onAddPlant, markAsSoldOut }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onAddPlant={onAddPlant}
          onMarkAsSoldOut={markAsSoldOut}
        />
      ))}
    </ul>
  );
}

export default PlantList;
