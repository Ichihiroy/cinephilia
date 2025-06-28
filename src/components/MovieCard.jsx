const MovieCard = ({ name, image, ageLimit, languages }) => (
  <div
    className="bg-gray-700 rounded-lg overflow-hidden  shadow-lg w-full h-72 bg-center bg-cover hover:scale-105 transition-transform duration-300"
    style={{ backgroundImage: `url('${image}')` }}
  >
    <div className="p-3 flex flex-col justify-end h-full bg-opacity-50">
      <h3 className="text-white text-md font-semibold">{name}</h3>
      <p className="text-sm text-gray-300">19.04.2025</p>
      <p className="text-sm">
        {ageLimit} <span>{languages[0]}</span>
      </p>
    </div>
  </div>
);

export default MovieCard;
