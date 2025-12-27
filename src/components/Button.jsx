import { FaDownload, FaEnvelope, FaFolderOpen } from "react-icons/fa";

export function Button({ variant, href }) {
  const baseClasses = `
     px-6 py-3 rounded-full font-semibold flex items-center gap-2 justify-center
     transition-all duration-300 transform
     focus:outline-none focus:ring-2 focus:ring-offset-2
  `;

  const variants = {
    "ver-proyectos": "bg-mi-azul-neon text-white shadow-md hover:shadow-xl hover:-translate-y-1 hover:brightness-110",
    "contactar": "bg-mi-azul-neon/70 text-white shadow-md hover:shadow-xl hover:-translate-y-1 hover:brightness-110 rounded-lg",
    "conocer-mas": "bg-mi-beige text-mi-gris-texto shadow-md hover:shadow-xl hover:-translate-y-1 hover:brightness-105",
   "ver-mi-trabajo": "bg-[#F5F5DC]/20 text-[#fcfcec] hover:bg-[#F5F5DC]/40 hover:text-white shadow-inner hover:shadow-lg hover:scale-105 rounded-xl px-6 py-3 flex items-center gap-2 justify-center transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-[#F5F5DC] focus:ring-offset-0",


    "descargar-cv": "bg-mi-lila text-white shadow-md hover:shadow-xl hover:-translate-y-1 hover:brightness-110",
    "descargar-cv-hero": "bg-[#F5F5DC]/20 text-[#fcfcec] hover:bg-[#F5F5DC]/40 hover:text-white shadow-inner hover:shadow-lg hover:scale-105 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F5F5DC] focus:ring-offset-0",
    "hablemos": "bg-mi-beige text-mi-gris-texto shadow-md hover:shadow-xl hover:-translate-y-1 hover:brightness-105",
  };

  const labels = {
    "ver-proyectos": "Ver Proyectos",
    "contactar": "Contactar",
    "conocer-mas": "Conocer Más",
    "ver-mi-trabajo": "Ver Mi Trabajo",
    "descargar-cv": "Descargar CV",
    "descargar-cv-hero": "Descargar CV",
    "hablemos": "Hablemos",
  };

  const icons = {
    "ver-proyectos": <FaFolderOpen />,
    "descargar-cv": <FaDownload />,
    "descargar-cv-hero": <FaDownload />,
    "hablemos": <FaEnvelope />,
    "contactar": null,
    "conocer-mas": null,
    "ver-mi-trabajo": <FaFolderOpen />,
  };

  // Variante descargar-cv (original)
  if ((variant === "descargar-cv" || variant === "descargar-cv-hero") && href) {
    return (
      <a
        href={href}
        download="CV.pdf"
        className={`${baseClasses} ${variants[variant]} flex items-center gap-2 justify-center`}
      >
        {icons[variant]} {labels[variant]}
      </a>
    );
  } 


  // Otros links normales
  else if (href) {
    return (
      <a href={href}>
        <button className={`${baseClasses} ${variants[variant]}`}>
          {icons[variant]} {labels[variant]}
        </button>
      </a>
    );
  } 
  // Botones normales sin href
  else {
    return (
      <button className={`${baseClasses} ${variants[variant]}`}>
        {icons[variant]} {labels[variant]}
      </button>
    );
  }
}
