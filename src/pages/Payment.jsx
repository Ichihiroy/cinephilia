import React, { useState, useEffect } from "react";
import { getTheatreById } from "../services/movieServices";
import { useParams, useLocation } from "react-router";

const Payment = () => {
  const [agreed, setAgreed] = useState(false);
  const [theatre, setTheatre] = useState(null);

  const location = useLocation();
  const selectedSeats = location.state?.selectedSeats;

  console.log(selectedSeats);

  const { id } = useParams();

  useEffect(() => {
    getTheatreById(id).then((data) => {
      setTheatre(data);
    });
  }, [id]);

  return (
    <div className="bg-zinc-900 text-white min-h-screen p-8 font-sans">
      <h1 className="text-2xl font-semibold mb-4">Ödəniş</h1>

      <div className="w-full h-1 bg-gray-700 mb-8">
        <div className="w-12 h-1 bg-red-700"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1 space-y-6">
          <div>
            <label className="block mb-2 text-sm text-gray-400">Email</label>
            <input
              type="email"
              className="bg-transparent border-b border-gray-600 outline-none w-full py-1"
              placeholder=""
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-400">+994</label>
            <input
              type="tel"
              className="bg-transparent border-b border-gray-600 outline-none w-full py-1"
              placeholder="51 511 11 11"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-red-700"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
            />
            <p className="text-sm">
              Mən{" "}
              <a href="#" className="underline text-blue-400">
                Qaydalar və şərtlər
              </a>{" "}
              oxudum və razıyam.
            </p>
          </div>

          <button
            disabled={!agreed}
            className={`px-6 py-2 rounded-md mt-4 ${
              agreed
                ? "bg-red-800 hover:bg-red-700"
                : "bg-red-900 text-gray-500 cursor-not-allowed"
            }`}
          >
            Ödənişə keç
          </button>
        </div>

        <div className="bg-zinc-800 p-6 rounded-md w-full md:max-w-sm">
          <h2 className="text-lg font-semibold mb-2">{theatre?.movie.name}</h2>
          <p className="text-sm text-gray-300">{theatre?.theatreTitle}</p>
          <p className="text-sm text-gray-300 mt-1">
            10.07.2025 00:10 &nbsp; {theatre?.hallTitle}
          </p>
          <p className="text-sm text-gray-300 mt-1">
            {selectedSeats.map(([row, col]) => (
              <p>
                Sıra {row}, Yer {col} {row > 5 ? "(İkili)" : "(Böyük)"}
              </p>
            ))}
          </p>
          <p className="font-bold text-white mt-4">
            Ümumi:{" "}
            {selectedSeats.reduce((acc, [row]) => acc + (row > 5 ? 19 : 9), 0)}
            AZN
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
