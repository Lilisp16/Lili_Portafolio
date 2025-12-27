import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export function CardProyecto({ proyecto }) {
  const { titulo, subtitulo, descripcion, web, github, tecnologias, imgProyecto } = proyecto;

  return (
   <div className="bg-white/40 backdrop-blur-md border border-white/30 rounded-lg flex flex-col shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 w-full">
  {/* Contenedor de la imagen */}
  <div className="relative h-56 bg-gray-200 rounded-t-lg flex items-center justify-center overflow-hidden">
    {imgProyecto ? (
      <img
        src={imgProyecto}
        alt={titulo}
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
      />
    ) : (
      <span className="text-gray-400">Imagen</span>
    )}

    {/* Iconos web y github */}
    {(web || github) && (
      <div className="absolute top-2 right-2 flex gap-2 text-white text-lg">
        {web && (
          <a href={web} target="_blank" rel="noreferrer" className="bg-black bg-opacity-50 p-1 rounded hover:bg-opacity-80">
            <FaExternalLinkAlt />
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noreferrer" className="bg-black bg-opacity-50 p-1 rounded hover:bg-opacity-80">
            <FaGithub />
          </a>
        )}
      </div>
    )}
  </div>

  {/* Contenido */}
  <div className="p-6 flex flex-col justify-between flex-1">
    <div>
      <h2 className="text-xl font-semibold mb-1">{titulo}</h2>
      {subtitulo && <p className="text-gray-500 text-sm mb-3">{subtitulo}</p>}
      <p className="text-gray-800 mb-4">{descripcion}</p>
    </div>

    {/* Tecnologías */}
    {tecnologias && (
      <div className="flex flex-wrap gap-3 text-mi-gris-texto text-xl">
        {tecnologias.map((Tech, i) =>
          typeof Tech === "string" ? (
            <span key={i} className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">{Tech}</span>
          ) : (
            <Tech key={i} />
          )
        )}
      </div>
    )}
  </div>
</div>



  );
}
