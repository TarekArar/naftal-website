import React from "react";

export default function CardsList() {
  return (
    <div className="flex justify-around my-10">
      {[1, 2, 3].map((el) => (
        <Card key={el} />
      ))}
    </div>
  );
}

const Card = () => (
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img
      class="w-full"
      src="https://www.entv.dz/wp-content/uploads/2021/10/db2d6c734fee32d1bec1e5e3cc6fbbef.jpg"
      alt="Mountain"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Mountain</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #photography
      </span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #travel
      </span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #winter
      </span>
    </div>
  </div>
);
