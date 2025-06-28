function getFlagEmoji(code) {
  return code
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt()))
    .join("");
}

const MovieCard = ({
  name,
  image,
  ageLimit,
  languages,
  firstScreeningDate,
}) => {
  const formatedDate = new Date(firstScreeningDate).toLocaleDateString("en-GB");

  return (
    <div
      className="relative bg-gray-700 rounded-lg overflow-hidden shadow-lg w-full h-84 bg-center bg-cover hover:scale-105 transition-transform duration-300"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative p-3 flex flex-col justify-end h-full">
        <h3 className="text-white text-md font-semibold">{name}</h3>
        <p className="text-sm text-gray-300 text-xs mt-2">{formatedDate}</p>
        <p className="text-sm flex justify-between items-center ">
          {ageLimit === "SIXTEEN" ? (
            <span className="text-xs">16+</span>
          ) : ageLimit === "TWELVE" ? (
            <span className="text-xs">12+</span>
          ) : ageLimit === "EIGHTEEN" ? (
            <span className="text-xs">18+</span>
          ) : ageLimit === "SIX" ? (
            <span className="text-xs">6+</span>
          ) : null}{" "}
          <span>
            {languages.map((lang, i) =>
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
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
