import { Button } from "./Button";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/lili_Dev.png";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 px-6 py-12">
      
      {/* Grid principal: 4 columnas en desktop */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pl-6">
        
        {/* Logo y descripción */}
        <div className="space-y-2">
          <img src={logo} alt="logo" className="w-20" />
          <h4 className="text-xl font-semibold text-white">Mi Portafolio</h4>
          <p className="text-gray-400 leading-relaxed">
           Desarrolladora de software apasionada por crear soluciones con propósito y calidad.
          </p>
        </div>

        {/* Portafolio / proyectos */}
        <div className="space-y-2">
          <h6 className="text-m font-semibold text-white">Portafolio</h6>
          <ul className="space-y-1 text-gray-400">
            <li>Proyecto 1f fdsfdsfs</li>
            <li>Proyecto 2 fsdfdsf</li>
            <li>Proyecto 3 fsdf</li>
            <li>Proyecto 4 fsfsdffd</li>
          </ul>
        </div>

        {/* Contacto */}
        <div id="contacto" className="space-y-3">
          <h6 className="text-m font-semibold text-white">Contacto</h6>
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

        {/* Redes sociales + botón */}
        <div className="space-y-5">
          <div className="flex gap-4 text-xl">
            <a href="https://github.com" target="_blank" className="hover:text-mi-azul-neon transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-mi-azul-neon transition">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/573218394396" target="_blank" className="hover:text-mi-azul-neon transition">
              <FaWhatsapp />
            </a>
          </div>

          <div className="mt-3 w-max">
            <Button variant="descargar-cv-hero" href={`${import.meta.env.BASE_URL}CV.pdf`} />
          </div>
        </div>

      </div>

      {/* Línea divisoria */}
      <hr className="my-10 border-gray-700" />

      {/* Footer inferior */}
      <div className="text-center text-gray-500 text-sm">
        © 2025 Mi Portafolio. Hecho con 💛 y{" "}
        <span className="text-mi-lila font-semibold">dedicación</span>
      </div>
    </footer>
  );
}
