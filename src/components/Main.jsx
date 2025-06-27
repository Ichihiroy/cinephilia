import MovieCard from "./MovieCard";

const movies = [
  {
    title: "Qəlblərin yaddaşı",
    date: "19.06.2025",
    age: "18+",
    flag: "🇷🇺",
    img: "/movie1.jpg",
  },
  {
    title: "Qanlı Məhsul",
    date: "19.06.2025",
    age: "18+",
    flag: "🇷🇺",
    img: "/movie2.jpg",
  },
  {
    title: "M3QAN 2.0",
    date: "26.06.2025",
    age: "18+",
    flag: "🇷🇺🇬🇧",
    img: "/movie3.jpg",
  },
  {
    title: "Ritual",
    date: "26.06.2025",
    age: "18+",
    flag: "🇷🇺🇬🇧",
    img: "/movie4.jpg",
  },
];

const Main = () => {
  return (
    <div className="p-6  container mx-auto">
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

      <div className="flex justify-between items-center mb-6 text-sm text-gray-300">
        <select className="bg-gray-700 p-2 rounded">
          {" "}
          <option>Dil</option>{" "}
        </select>
        <select className="bg-gray-700 p-2 rounded">
          {" "}
          <option>Kinoteatr</option>{" "}
        </select>
        <input type="date" className="bg-gray-700 p-2 rounded" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default Main;
