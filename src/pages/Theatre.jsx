import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieById, getTheatreById } from "../services/movieServices.js";
import { useNavigate } from "react-router";
import { FaCalendarAlt } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

const Theatre = () => {
  const [theatre, setTheatre] = useState(null);
  const [movie, setMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

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

  function handleClick(e, row, col) {
    const target = e.target;
    if (target.classList.contains("bg-white")) {
      target.classList.remove("bg-white");
      target.classList.add("bg-red-600");
      target.classList.add("text-white");
      setSelectedSeats([...selectedSeats, [row, col]]);
    } else if (target.classList.contains("bg-blue-600")) {
      target.classList.remove("bg-blue-600");
      target.classList.add("bg-red-600");
      setSelectedSeats([...selectedSeats, [row, col]]);
    } else if (target.classList.contains("bg-red-600")) {
      target.classList.remove("bg-red-600");
      target.classList.remove("text-white");
      target.classList.contains("double-seats")
        ? target.classList.add("bg-blue-600")
        : target.classList.add("bg-white");
      setSelectedSeats(
        selectedSeats.filter(([r, c]) => r !== row || c !== col)
      );
    }
  }

  console.log("Selected Seats:", selectedSeats);

  return (
    <div className="bg-zinc-900 text-white min-h-screen p-6">
      <h1 className="text-2xl font-semibold mb-4">Oturacaq Seçimi</h1>

      <div className="flex gap-4 bg-zinc-800 p-4 rounded-md">
        <img
          src={movie?.image}
          alt={movie?.name}
          className="w-32 h-48 object-cover rounded"
        />
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{movie?.name}</h2>
          <p className="text-sm font-medium">{theatre?.type.slice(1)}</p>
          <p className="text-sm mt-1 flex items-center gap-2">
            <FaCalendarAlt size={12} /> {movie?.firstScreeningDate.slice(0, 10)}
          </p>
          <p className="text-sm flex items-center gap-2">
            <CiClock2 /> 00:10
          </p>
          <p className="text-sm">Dil: RU</p>
          <p className="text-sm">Kinoteatr: {theatre?.theatreTitle}</p>
          <p className="text-sm">{theatre?.hallTitle}</p>
          <p className="text-sm">Müddət: 02:10:00</p>
        </div>
      </div>

      <div className="flex justify-between items-end mt-6">
        <div className="flex gap-6 text-sm  flex-col md:flex-row">
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

        <div className="text-sm mt-2 text-center pr-2 md:text-right flex flex-col md:flex-row gap-6 items-end">
          <span className="mr-4">
            Ailə <strong>6 AZN</strong>
          </span>
          <span className="mr-4">
            Böyük <strong>9 AZN</strong>
          </span>
          <span className="mr-4">
            İkili <strong>19 AZN</strong>
          </span>
        </div>
      </div>

      <div className="mt-4 bg-zinc-800 p-4 rounded-md overflow-x-auto">
        <div className="grid grid-cols-[30px_repeat(12,36px)] gap-3 justify-center items-center">
          {[7, 6, 5, 4, 3, 2, 1].map((row) => (
            <React.Fragment key={row}>
              <div className="text-sm text-gray-300">{row}</div>
              {Array.from({ length: 12 }).map((_, idx) => {
                const isAvailable = !(row === 5 && (idx === 5 || idx === 6));
                return (
                  <div
                    key={idx}
                    onClick={(e) => handleClick(e, row, idx + 1)}
                    className={`w-8 h-8 text-sm flex items-center cursor-pointer justify-center rounded ${
                      row >= 6
                        ? "bg-blue-600 w-8 double-seats"
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
      <div className="flex justify-between items-end mt-6">
        <div className="flex flex-col  gap-2">
          <div className="flex flex-wrap gap-3 text-sm flex-col md:flex-row">
            {selectedSeats.map(([row, col]) => (
              <p>
                Sıra {row}, Yer {col} {row > 5 ? "(İkili)" : "(Böyük)"}
              </p>
            ))}
          </div>
          <span className="text-sm font-semibold">
            Ümümi:{" "}
            {selectedSeats.reduce((acc, [row]) => acc + (row > 5 ? 19 : 9), 0)}{" "}
            AZN
          </span>
        </div>
        <button
          onClick={() =>
            navigate(`/payment/${id}`, { state: { selectedSeats } })
          }
          className={`${
            selectedSeats.length == 0 ? "hidden" : ""
          } bg-red-700 hover:bg-red-800 text-white text-sm px-4 cursor-pointer py-1 rounded-full`}
          disabled={selectedSeats.length === 0}
        >
          Bilet Al
        </button>
      </div>
    </div>
  );
};

export default Theatre;
