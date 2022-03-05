import React from "react";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import logo from "../assets/Logo_NAFTAL.png";

const Card = ({ image, title, description }) => (
  <div class="max-w-sm bg-white   dark:bg-gray-800 dark:border-gray-700 pb-3">
    <a href="#">
      <img class="w-full" src={image} alt="" />
    </a>
    <div class="p-5">
      <div className="h-[250px]">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
          {description}
        </p>
      </div>

      <a
        href="#"
        class="inline-flex float-right    text-sm font-medium text-center text-[#002866]  "
      >
        Lire la suite
        <svg
          class="ml-2 -mr-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  </div>
);

const data = [
  {
    image: image7,
    title:
      "Naftal participe à la 17 ème Edition du Salon International des Travaux ...",
    description: `NAFTAL représentée par sa Branche Commercialisation 
  a pris part du 19 au 23 Novembre 2019, à la 17ème 
  Edition du Salon International des Travaux Publics
   « SITP 2019 » sous le thème « défis, réalisations et 
  entretien »...`,
  },
  {
    image: image8,
    title: "NAFTAL : Mourad Menouar, nouveau PDG par interim",
    description: `Toufik Hakkar, PDG de Sonatrach, a nommé Mourad 
  Menouar PDG par intérim de Naftal, succédant à 
  Kamel Benfriha, a annoncé ce jeudi 9 septembre 2021, 
  le groupe pétrolier et gazier dans un communiqué 
  publié sur sa page Facebook ...`,
  },
  {
    image: image9,
    title:
      "Le Président Directeur Général reçoit l’Ambassadeur du Zimbabwe à Alger",
    description: `Le Président Directeur Général de Naftal, Monsieur 
  Mourad MENOUAR, a reçu en audience ce matin, 
  10 janvier 2022, au siège de la Direction Générale, 
  Son Excellence Monsieur Vusumuzi NTONGA, 
  Ambassadeur du Zimbabwe à Alger ...`,
  },
];

export default function Actualites() {
  return (
    <div className=" mb-10 mt-20">
      <div className="flex justify-center mb-10">
        <p className="  text-[#002866] font-bold text-3xl  text-center">
          Actualites
        </p>
      </div>

      <div className="flex justify-around">
        {data.map((el) => (
          <Card {...el} />
        ))}
      </div>

      <div className=" justify-center text-center mx-auto mt-10">
        <p className="  text-[#303030] font-bold text-xl  text-center">
          Consulter toutes les actualites de l’entreprise
        </p>

        <img src={logo} className="mx-auto mt-10 mb-4" />

        <p>Une relation de confiance</p>
      </div>
    </div>
  );
}
