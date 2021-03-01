// import React, { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  const { data: images, loading } = useFetchGifs(category);
  // useEffect(() => {
  //   getGifs(category).then((imgs) => setImages(imgs));
  // }, [category]);

  // getGifs();
  return (
    <>
      <h3 className="animate__animated animate__fadeInDown animate__delay-1s">
        {category}
      </h3>
      {loading && <p className="animate__animated animate_flash">Loading...</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
