import { useParams } from "react-router";
import { getAllTheatres, getMovieById } from "../services/movieServices.js";
import MovieSessions from "../components/MovieSessions";
import { useState, useEffect } from "react";

function getFlagEmoji(code) {
  return code
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt()))
    .join("");
}

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [theatres, setTheatres] = useState([]);

  useEffect(() => {
    getMovieById(id).then(setMovie);
    getAllTheatres().then(setTheatres);
  }, [id]);

  return (
    <div className="bg-zinc-900 text-white min-h-screen p-4 sm:p-6 ">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-shrink-0 mx-auto lg:mx-0">
          <img
            src={movie?.image}
            alt={`${movie?.name} Poster`}
            className="rounded-xl max-w-xs w-full shadow-lg"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{movie?.name}</h1>
          <p className="text-sm text-gray-400">{movie?.genres?.[0]?.title}</p>

          <div className="flex flex-wrap items-center gap-2">
            <p className="font-semibold">Dil:</p>
            {movie?.languages?.map((lang, i) => (
              <span key={i} className="text-xl">
                {getFlagEmoji(lang === "EN" ? "GB" : lang)}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <p className="font-semibold">Altyazı:</p>
            {movie?.subtitles?.map((sub, i) => (
              <span key={i} className="text-xl">
                {getFlagEmoji(sub === "EN" ? "GB" : sub)}
              </span>
            ))}
          </div>

          <p>
            <span className="font-semibold">Müddət:</span> {movie?.duration} dəq
          </p>
          <p>
            <span className="font-semibold">İl:</span>{" "}
            {movie?.firstScreeningDate?.slice(0, 4)}
          </p>
          <p>
            <span className="font-semibold">Ölkə:</span> {movie?.country}
          </p>
          <p>
            <span className="font-semibold">Rejissor:</span> {movie?.director}
          </p>

          <div>
            <p className="font-semibold">Aktyorlar:</p>
            <ul className="list-disc list-inside text-sm text-gray-300">
              {movie?.actors?.map((actor, i) => (
                <li key={i}>{actor}</li>
              ))}
            </ul>
          </div>

          <p>
            <span className="font-semibold">Yaş Həddi:</span>{" "}
            <span className="text-xs">
              {
                {
                  SIXTEEN: "16+",
                  TWELVE: "12+",
                  EIGHTEEN: "18+",
                  SIX: "6+",
                }[movie?.ageLimit]
              }
            </span>
          </p>

          <p>
            <span className="font-semibold">Nümayiş Tarixi:</span>{" "}
            {movie?.firstScreeningDate
              ? new Date(movie.firstScreeningDate).toLocaleDateString("en-GB")
              : ""}
          </p>
        </div>

        {movie?.youtubeUrl && (
          <div className="w-full lg:w-[500px]">
            <iframe
              title="Trailer"
              width="100%"
              height="280"
              src={movie?.youtubeUrl.replace("watch?v=", "embed/")}
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          </div>
        )}
      </div>

      <div className="mt-10 text-sm text-gray-300 max-w-4xl">
        <p>{movie?.description}</p>
      </div>

      <div className="mt-12">
        {theatres.length > 0 &&
          movie &&
          theatres
            .filter((theatre) => theatre.movie.id == id)
            .map((theatre, i) => <MovieSessions key={i} theatre={theatre} />)}
      </div>
    </div>
  );
};

export default Details;
