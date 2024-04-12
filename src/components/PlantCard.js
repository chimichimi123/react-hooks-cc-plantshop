import React, { useState } from "react";

function PlantCard({ plant, markAsSoldOut }) {
  const [isInStock, setIsInStock] = useState(true);

  const toggleButton = () => {
    setIsInStock(!isInStock);
  };

  const buttonText = isInStock ? "In Stock" : "Out of Stock";

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button onClick={toggleButton}>{buttonText}</button>
    </li>
  );
}

export default PlantCard;
