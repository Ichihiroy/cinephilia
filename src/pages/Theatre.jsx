import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getTheatreById } from "../services/movieServices";

const Theatre = () => {
  const [theatre, setTheatre] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getTheatreById(id).then((data) => {
      setTheatre(data);
    });
  }, [id]);

  return <div>{theatre?.movie.name}</div>;
};

export default Theatre;
