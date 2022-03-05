import React from "react";

export default function ImagesSection({ images, title }) {
  return (
    <div className="my-10">
      <div className="flex justify-center my-10">{title}</div>

      <div className="flex justify-around">
        {images.map((el, index) => (
          <div
            className="w-[375px] h-[350px] flex items-end justify-center"
            style={{ backgroundImage: `url(${el.src})` }}
          >
            {el.title && (
              <p className=" text-center text-[20px] text-white font-bold mb-4">
                {el.title}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
