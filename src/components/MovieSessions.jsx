const MovieSessions = ({ theatre }) => {
  const { time, theatreTitle, hallTitle, type } = theatre;

  return (
    <div className="bg-gray-600 text-white flex items-center justify-between px-6 py-3 rounded-md border border-gray-700 mb-4">
      <span className="text-sm">{time}</span>

      <div className="text-sm flex-1 text-center">
        <span className="font-medium">{theatreTitle}</span>
        <span className="mx-1">|</span>
        <span>{hallTitle}</span>
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-sm">{type.slice(1)}</span>
        <span>
          <img
            src="https://flagcdn.com/w40/ru.png"
            alt="Russian"
            className="w-5 h-5 rounded-full"
          />
        </span>

        <span className="border border-white rounded-full px-2 py-0.5 text-xs">
          Altyazı: AZ
        </span>

        <button className="bg-red-700 hover:bg-red-800 text-white text-sm px-4 py-1 rounded-full">
          Bilet Al
        </button>
      </div>
    </div>
  );
};

export default MovieSessions;
