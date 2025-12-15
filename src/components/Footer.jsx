import { Button } from "./Button";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/lili_Dev.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12">
      
      {/* Grid principal */}
      <div className="max-w-6xl mx-auto pl-20  grid grid-cols-1 md:grid-cols-3 gap-8">
        
   
        <div>
            <img src={logo} alt="logo" className="w-20" />
          <h4 className="text-xl font-semibold text-white">
                 Mi Portafolio
          </h4>
          <p className="text-gray-400 leading-relaxed">
            Desarrolladora de software apasionado por crear soluciones con propósito,
            combinando excelencia técnica con valores auténticos.
          </p>
        </div>

   
        <div id="contacto" className="space-y-3">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-mi-lila" />
            <span>lilijs@outlook.com</span>
          </div>

          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-mi-lila" />
            <span>+57 321 839 4396</span>
          </div>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-mi-lila" />
            <span>Cali, Colombia</span>
          </div>
        </div>

  
        <div className="space-y-4">
          <div className="flex gap-4 text-xl">
            <a href="https://github.com" target="_blank" className="hover:text-mi-azul-neon transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-mi-azul-neon transition">
              <FaLinkedin />
            </a>

            <a href="https://linkedin.com" target="_blank" className="hover:text-mi-azul-neon transition">
              <FaWhatsapp />
            </a>
            
          </div>

          <div className="mt-5">

          <Button variant="descargar-cv" href="/CV.pdf" />
          </div>
        </div>
      </div>

      {/* Línea */}
      <hr className="my-10 border-gray-700" />

      {/* Footer inferior */}
      <div className="text-center text-gray-500 text-sm">
        © 2025 Mi Portafolio. Hecho con 💛 y{" "}
        <span className="text-mi-lila font-semibold">dedicación</span>
      </div>
    </footer>
  );
}
