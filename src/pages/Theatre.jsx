import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieById, getTheatreById } from "../services/movieServices";
import React from "react";

const Theatre = () => {
  const [theatre, setTheatre] = useState(null);
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getTheatreById(id).then((data) => {
      setTheatre(data);
    });
  }, [id]);

  useEffect(() => {
    getMovieById(theatre?.movie.id).then((data) => {
      setMovie(data);
    });
  }, [theatre]);

  function handleClick(e) {
    const target = e.target;
    if (target.classList.contains("bg-white")) {
      target.classList.remove("bg-white");
      target.classList.add("bg-red-600");
    } else if (target.classList.contains("bg-blue-600")) {
      target.classList.remove("bg-blue-600");
      target.classList.add("bg-red-600");
    } else if (target.classList.contains("bg-red-600")) {
      target.classList.remove("bg-red-600");
      target.classList.add("bg-white");
      target.classList;
    }
  }

  return (
    <div className="bg-gray-800 text-white min-h-screen p-6">
      <h1 className="text-2xl font-semibold mb-4">Oturacaq Seçimi</h1>

      <div className="flex gap-4 bg-gray-700 p-4 rounded-md">
        <img
          src={movie?.image}
          alt={movie?.name}
          className="w-32 h-48 object-cover rounded"
        />
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{movie?.name}</h2>
          <p className="text-sm font-medium">{theatre?.type.slice(1)}</p>
          <p className="text-sm mt-1">
            📅 {movie?.firstScreeningDate.slice(0, 10)}
          </p>
          <p className="text-sm">🕛 00:10</p>
          <p className="text-sm">Dil: RU</p>
          <p className="text-sm">Kinoteatr: {theatre?.theatreTitle}</p>
          <p className="text-sm">{theatre?.hallTitle}</p>
          <p className="text-sm">Müddət: 02:10:00</p>
        </div>
      </div>

      <div className="text-sm mt-2 text-right pr-2">
        <span className="mr-4">
          Ailə <strong>6 AZN</strong>
        </span>
        <span className="mr-4">
          Böyük <strong>9 AZN</strong>
        </span>
        <span>
          İkili <strong>19 AZN</strong>
        </span>
      </div>

      <div className="flex gap-6 text-sm my-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white rounded"></div> Mövcuddur
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-black rounded"></div> Tutulmuş
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-600 rounded"></div> Seçilmiş
        </div>
      </div>

      <div className="mt-4 bg-gray-700 p-4 rounded-md overflow-x-auto">
        <div className="grid grid-cols-[30px_repeat(12,36px)] gap-3 justify-center items-center">
          {[7, 6, 5, 4, 3, 2, 1].map((row) => (
            <React.Fragment key={row}>
              <div className="text-sm text-gray-300">{row}</div>
              {Array.from({ length: 12 }).map((_, idx) => {
                const isAvailable = !(row === 5 && (idx === 5 || idx === 6));
                return (
                  <div
                    key={idx}
                    onClick={(e) => handleClick(e)}
                    className={`w-8 h-8 text-sm flex items-center justify-center rounded ${
                      row >= 6
                        ? "bg-blue-600 w-16"
                        : isAvailable
                        ? "bg-white text-black"
                        : "bg-black"
                    }`}
                  >
                    {idx + 1}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Theatre;
