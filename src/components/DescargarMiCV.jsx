import { Button } from "./Button";
import { FaDownload } from "react-icons/fa";

export default function DescargarmiCV() {
  return (
    <div id="cv" className="w-full max-w-2xl  bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col items-center text-center mt-10">
      
      {/* Icono de descarga */}
      <span className="text-4xl text-mi-azul-neon">
        <FaDownload />
      </span>

      {/* Título */}
      <h3 className="text-xl font-bold text-mi-gris-texto">
        Descarga mi CV
      </h3>

      {/* Descripción */}
      <p className="text-mi-gris-texto pb-3">
        Conoce más detalles sobre mi experiencia y formación profesional.
      </p>

      {/* Botón de descarga */}
      <Button variant="descargar-cv"  href="/CV.pdf" />
    </div>
  );
}
