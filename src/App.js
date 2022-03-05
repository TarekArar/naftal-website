import "./App.css";
import CardsList from "./components/CardsList";
import Footer from "./components/Footer";
import ImagesCarousel from "./components/ImagesCarousel";
import ImagesSection from "./components/ImagesSection";
import Navbar from "./components/Navbar";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import image5 from "./assets/image5.png";
import image6 from "./assets/image6.png";
import Actualites from "./components/Actualites";

function App() {
  return (
    <div>
      <Navbar />
      <ImagesCarousel />
      <ImagesSection
        title={
          <p className="  text-[#002866] font-semibold text-3xl mx-10 w-[625px] text-center">
            <span className="text-[#EDCF21]">NAFTAL</span> est l’entreprise
            responsable de la distribution des produits pétroliers en{" "}
            <span className="text-[#EDCF21]">Algerie</span> pour la consomption
            locale
          </p>
        }
        images={[
          {
            src: image1,
          },
          {
            src: image2,
          },
          {
            src: image3,
          },
        ]}
      />

      <ImagesSection
        title={
          <p className="  text-[#002866] font-semibold text-3xl mx-10 w-[425px] text-center">
            Consulter les activites et les projets de de Naftal
          </p>
        }
        images={[
          {
            src: image4,
            title: "Protection de l’environment",
          },
          {
            src: image5,
            title: "Recherche et Development",
          },
          {
            src: image6,
            title: "Transport maritime",
          },
        ]}
      />
      <Actualites />
      <Footer />
    </div>
  );
}

export default App;
