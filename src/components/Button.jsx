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
    "ver-mi-trabajo": "bg-mi-azul-neon text-white shadow-md hover:shadow-xl hover:-translate-y-1 hover:brightness-110",
    "descargar-cv": "bg-mi-lila text-white shadow-md hover:shadow-xl hover:-translate-y-1 hover:brightness-110",
    "hablemos": "bg-mi-beige text-mi-gris-texto shadow-md hover:shadow-xl hover:-translate-y-1 hover:brightness-105",
  };

  const labels = {
    "ver-proyectos": "Ver Proyectos",
    "contactar": "Contactar",
    "conocer-mas": "Conocer Más",
    "ver-mi-trabajo": "Ver Mi Trabajo",
    "descargar-cv": "Descargar CV",
    "hablemos": "Hablemos",
  };

  const icons = {
    "ver-proyectos": <FaFolderOpen />,
    "descargar-cv": <FaDownload />,
    "hablemos": <FaEnvelope />,
    "contactar": null,
    "conocer-mas": null,
    "ver-mi-trabajo": null,
  };

  // Detecta si es descarga o link normal
  if (variant === "descargar-cv" && href) {
    return (
      <a href={href} download>
        <button className={`${baseClasses} ${variants[variant]}`}>
          {icons[variant]} {labels[variant]}
        </button>
      </a>
    );
  } else if (href) {
    return (
      <a href={href}>
        <button className={`${baseClasses} ${variants[variant]}`}>
          {icons[variant]} {labels[variant]}
        </button>
      </a>
    );
  } else {
    return (
      <button className={`${baseClasses} ${variants[variant]}`}>
        {icons[variant]} {labels[variant]}
      </button>
    );
  }
}
