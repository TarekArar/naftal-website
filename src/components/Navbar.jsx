import React from "react";
import logo from "../assets/logo.png";
const links = ["Naftal", "Produis & Services", "Developement & Durabilite"];

export default function Navbar() {
  return (
    <nav>
      <div className="flex h-[55px] w-[60%] justify-around items-center ">
        <div clas>
          <img src={logo} className="w-20 h-10" />
        </div>
        <div>
          {links.map((el) => (
            <a className="mx-5 " href="#">
              {el}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
