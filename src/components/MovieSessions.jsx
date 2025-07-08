import { useNavigate } from "react-router";

const MovieSessions = ({ theatre }) => {
  const { time, theatreTitle, hallTitle, type } = theatre;

  const navigate = useNavigate();

  return (
    <div className="bg-zinc-800 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3 rounded-md  mb-4 space-y-3 sm:space-y-0">
      <span className="text-sm sm:text-base">{time}</span>

      <div className="text-sm sm:text-base text-center sm:flex-1 sm:text-center">
        <span className="font-medium">{theatreTitle}</span>
        <span className="mx-1">|</span>
        <span>{hallTitle}</span>
      </div>

      <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-end gap-2 sm:gap-4">
        <span className="text-sm">{type.slice(1)}</span>

        <img
          src="https://flagcdn.com/w40/ru.png"
          alt="Russian"
          className="w-5 h-5 rounded-full"
        />

        <span className="border border-white rounded-full px-2 py-0.5 text-xs whitespace-nowrap">
          Altyazı: AZ
        </span>

        <button
          onClick={() => navigate("/theatre/" + theatre.id)}
          className="bg-red-700 hover:bg-red-800 text-white text-sm px-4 py-1 rounded-full"
        >
          Bilet Al
        </button>
      </div>
    </div>
  );
};

export default MovieSessions;
