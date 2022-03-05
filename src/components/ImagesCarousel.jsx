import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import cover from "../assets/header-bg.png";

const LabelCard = () => (
  <div className="absolute z-40 top-[10vh] left-20 text-left	w-[420px] ">
    <div className="mb-20 mt-4">
      <p className="text-[#EDCF21] font-semibold text-xl mb-4">Energie</p>
      <p className="text-3xl text-white font-bold">
        La distribution, le stockage et le transport des produits pétroliers.
      </p>
    </div>

    <span className="mt-5 bg-[#EDCF21] p-4 text-white w-[215px] font-bold text-lg cursor-pointer">
      Decouvrez plus
    </span>
  </div>
);

export default function ImagesCarousel() {
  return (
    <div>
      <LabelCard />

      <Carousel autoPlay showThumbs={false}>
        <div>
          <img className="h-[80vh]" src={cover} />
        </div>
        <div>
          <img className="h-[80vh]" src={cover} />
        </div>
        <div>
          <img className="h-[80vh]" src={cover} />
        </div>
      </Carousel>
    </div>
  );
}
