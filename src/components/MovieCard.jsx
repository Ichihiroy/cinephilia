import React from "react";

const MovieCard = ({ title, date, age, flag, img }) => (
  <div className="bg-gray-700 rounded overflow-hidden shadow-lg">
    <img src={img} alt={title} className="w-full h-72 object-cover" />
    <div className="p-3">
      <h3 className="text-white text-md font-semibold">{title}</h3>
      <p className="text-sm text-gray-300">{date}</p>
      <p className="text-sm">
        {age} <span>{flag}</span>
      </p>
    </div>
  </div>
);

export default MovieCard;
