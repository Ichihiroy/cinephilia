import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const Main = () => {
  const [data, setData] = useState([]);
  const [lang, setLang] = useState("Dil");
  const [theatre, setTheatre] = useState([]);
  // const [theatreValue, setTheatreValue] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/theatre")
      .then((response) => response.json())
      .then((data) => setTheatre(data))
      .catch((error) => console.error("Error fetching theatre data:", error));
  }, []);

  const filteredData = data
    .filter((movie) => lang === "Dil" || movie.languages.includes(lang))
    .filter(
      (movie) =>
        !date ||
        (new Date(date) <= new Date(movie.lastScreeningDate) &&
          new Date(date) >= new Date(movie.firstScreeningDate))
    );

  function clear() {
    setLang("Dil");
    setDate("");
  }

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
        <select
          value={lang}
          className="bg-gray-700 p-2 rounded w-84 text-center"
          onChange={(e) => setLang(e.target.value)}
        >
          <option disabled selected>
            Dil
          </option>
          <option>AZ</option>
          <option>TR</option>
          <option>RU</option>
          <option>EN</option>
        </select>
        <select
          className="bg-gray-700 p-2 rounded w-84 text-center"
          onChange={(e) => setTheatreValue(e.target.value)}
        >
          <option disabled selected>
            Kinoteatr
          </option>
          {[...new Set(theatre?.map((theatre) => theatre.theatreTitle))].map(
            (theatreName, index) => (
              <option key={index} value={theatreName}>
                {theatreName}
              </option>
            )
          )}
        </select>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          className="bg-gray-700 p-2 rounded w-84 text-center"
        />
        <button
          className="bg-red-700 p-2 rounded w-24 font-bold text-center text-black hover:bg-red-900 transition-colors duration-300"
          onClick={clear}
        >
          Təmizlə
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredData?.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default Main;
