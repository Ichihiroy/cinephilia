import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div className="p-6 container mx-auto">
      <div className="flex justify-between items-center text-white text-xl mb-4">
        <h2 className="font-semibold">Siyahı</h2>
        <nav className="space-x-4 text-sm">
          <a href="#" className="border-b-2 border-white">
            Hamısı
          </a>
          <a href="#">Tezliklə</a>
          <a href="#">Cədvəl</a>
        </nav>
      </div>

      <div className="flex justify-between items-center mb-6 text-sm text-gray-300 gap-3">
        <select className="bg-gray-700 p-2 rounded w-84 text-center">
          <option disabled>Dil</option>
          <option>Dil</option>
          <option>Dil</option>
          <option>Dil</option>
        </select>
        <select className="bg-gray-700 p-2 rounded w-84 text-center">
          <option>Kinoteatr</option>
        </select>
        <input
          type="date"
          className="bg-gray-700 p-2 rounded w-84 text-center"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {data?.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default Main;
