import Navbar from "./Navbar";
import portada1 from "../assets/trigo.png";
import { FaEnvelope, FaMapMarkerAlt, FaArrowDown } from "react-icons/fa"; // Importando iconos

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
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6 border border-white/30">
          <span className="text-white/90">Desarrolladora Backend</span>
        </div>

        {/* Título */}
        <h1 className="text-[#5d5551] text-2xl md:text-4xl font-bold">
          Creando soluciones con pasión y propósito
        </h1>

        {/* Botones principales */}
        <div className="flex gap-4 mt-6">
          <a
            href="#portafolio"
            className="bg-[#00FFFF]/60 hover:bg-[#00FFFF] text-white px-4 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg"
          >
            Ver mi trabajo
          </a>

          <a
            href="#acerca"
            className="bg-[#F5F5DC]/70 hover:bg-[#F5F5DC] text-gray-700 px-4 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg"
          >
            Conoce más
          </a>
        </div>

        {/* Descargar CV con flecha animada */}
        <a
          href="#cv"
          className="mt-10 flex flex-col items-center gap-2 text-white hover:text-[#00FFFF] transition-colors"
        >
          <span className="font-semibold text-lg">Descargar CV</span>
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
