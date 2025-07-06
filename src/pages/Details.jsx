import { useParams } from "react-router";
import { getMovieById } from "../services/MovieServices";
import { useState } from "react";

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
  getMovieById(id).then((data) => {
    setMovie(data);
  });

  return (
    <div className="bg-gray-800 text-white min-h-screen p-6">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-shrink-0">
          <img
            src={movie?.image}
            alt="Superman Poster"
            className="rounded-xl max-w-xs shadow-lg"
          />
        </div>

        <div className="flex-1 space-y-3">
          <h1 className="text-3xl font-bold">{movie?.name}</h1>
          <p className="text-sm text-gray-400">{movie?.genres[0].title}</p>

          <div className="flex gap-2 items-center">
            <p>Dil:</p>
            <span>
              {movie?.languages.map((lang, i) =>
                lang == "EN" ? (
                  <span key={i} className="mr-1">
                    {getFlagEmoji("GB")}
                  </span>
                ) : (
                  <span key={i} className="mr-1">
                    {getFlagEmoji(lang)}
                  </span>
                )
              )}
            </span>
          </div>

          <div className="flex gap-2 items-center">
            <p>Altyazı:</p>
            {movie?.subtitles.map((sub, i) =>
              sub == "EN" ? (
                <span key={i} className="mr-1">
                  {getFlagEmoji("GB")}
                </span>
              ) : (
                <span key={i} className="mr-1">
                  {getFlagEmoji(sub)}
                </span>
              )
            )}
          </div>

          <p>Müddət: {movie?.duration} dq</p>
          <p>İl: {movie?.firstScreeningDate.slice(0, 4)}</p>
          <p>Ölkə: {movie?.country}</p>
          <p>Rejissor: {movie?.director}</p>
          <ul className="flex ">
            Aktyorlar:{" "}
            {movie?.actors.map((actor) => (
              <li> {actor},</li>
            ))}
          </ul>
          <p>Yaş Həddi: 16+</p>
          <p>
            Nümayiş Tarixi:
            {new Date(movie?.firstScreeningDate).toLocaleDateString("en-GB")}
          </p>
        </div>

        <div className="w-full lg:w-[500px]">
          <iframe
            width="100%"
            height="280"
            src={movie?.youtubeUrl}
            title="Superman Trailer"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
        </div>
      </div>

      <div className="mt-10 text-sm text-gray-300 max-w-4xl">
        <p>{movie?.description}</p>
      </div>
    </div>
  );
};

export default Details;
