import React from "react";
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();

  console.log("Movie ID:", id);
  return <div>Details</div>;
};

export default Details;
