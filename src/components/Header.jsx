import Navbar from "./Navbar";
import portada1 from "../assets/trigo.png";
import { FaEnvelope, FaMapMarkerAlt, FaArrowDown } from "react-icons/fa"; // Importando iconos
import { Button } from "./Button";

export default function Header() {
  return (
    <header
      id="inicio"
      className="relative h-[500px] w-full pt-20"
    >
      {/* Imagen de fondo */}
      <img src={portada1} alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"/>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#26DAEB]/90 to-[#F5F5DC]/40 z-10"></div>

      {/* Navbar */}
      <Navbar />

      {/* Contenido */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">

        {/* Rol */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md  mb-6  border-white/30">
          <span className="text-white/90">Desarrolladora Backend</span>
        </div>

        {/* Título */}
        <h1 className="text-[#e6e6e6] text-2xl md:text-4xl font-bold">
          Creando soluciones con pasión y propósito
        </h1>

        {/* Botones principales   4ok */}
        <div className="flex gap-4 mt-6">

<Button variant="ver-mi-trabajo" href="#portafolio"/>


       <Button variant="descargar-cv-hero" href={`${import.meta.env.BASE_URL}CV.pdf`}/>



        </div>

        {/* contacto con flecha animada */}
        <a
          href="#footer"
          className="mt-10 flex flex-col items-center gap-2 text-white hover:text-[#00FFFF] transition-colors"
        >
          <span className="font-semibold text-lg">Conectemos</span>
          <FaArrowDown className="animate-bounce w-6 h-6" />
        </a>

        {/* Información de contacto */}
        <div className="mt-6 text-sm text-mi-gris-texto">
          <p className="flex items-center gap-2 justify-center">
            <FaMapMarkerAlt /> Cali, Colombia
          </p>
          <p className="flex items-center gap-2 justify-center">
            <FaEnvelope /> lilijs@outlook.com
          </p>
        </div>
      </div>
    </header>
  );
}
